import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function NeuralBackground({ className = '' }) {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    let width = mount.clientWidth
    let height = mount.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
    camera.position.z = 60

    let renderer = null
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
      mount.appendChild(renderer.domElement)
    } catch (err) {
      console.warn('WebGL initialization skipped:', err)
      return
    }

    const NODE_COUNT = 130
    const BOUND_X = 70
    const BOUND_Y = 45
    const BOUND_Z = 40
    const MAX_DIST = 20

    const positions = new Float32Array(NODE_COUNT * 3)
    const velocities = []

    for (let i = 0; i < NODE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2 * BOUND_X
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2 * BOUND_Y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2 * BOUND_Z
      velocities.push({
        x: (Math.random() - 0.5) * 0.035,
        y: (Math.random() - 0.5) * 0.035,
        z: (Math.random() - 0.5) * 0.035,
      })
    }

    const nodeGeometry = new THREE.BufferGeometry()
    nodeGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const nodeMaterial = new THREE.PointsMaterial({
      color: new THREE.Color('#33e6c8'),
      size: 1.5,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
    })
    const pointCloud = new THREE.Points(nodeGeometry, nodeMaterial)
    scene.add(pointCloud)

    const lineGeometry = new THREE.BufferGeometry()
    const lineMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color('#33e6c8'),
      transparent: true,
      opacity: 0.12,
    })
    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial)
    scene.add(lineSegments)

    function rebuildLines() {
      const linePositions = []
      for (let i = 0; i < NODE_COUNT; i++) {
        const ix = positions[i * 3]
        const iy = positions[i * 3 + 1]
        const iz = positions[i * 3 + 2]
        for (let j = i + 1; j < NODE_COUNT; j++) {
          const dx = ix - positions[j * 3]
          const dy = iy - positions[j * 3 + 1]
          const dz = iz - positions[j * 3 + 2]
          const distSq = dx * dx + dy * dy + dz * dz
          if (distSq < MAX_DIST * MAX_DIST) {
            linePositions.push(ix, iy, iz, positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2])
          }
        }
      }
      lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3))
    }

    rebuildLines()

    let mouseX = 0
    let mouseY = 0
    function handleMouseMove(e) {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', handleMouseMove)

    let frameId = null
    let frameCount = 0

    function animate() {
      frameId = requestAnimationFrame(animate)
      frameCount += 1

      for (let i = 0; i < NODE_COUNT; i++) {
        positions[i * 3] += velocities[i].x
        positions[i * 3 + 1] += velocities[i].y
        positions[i * 3 + 2] += velocities[i].z

        if (positions[i * 3] > BOUND_X || positions[i * 3] < -BOUND_X) velocities[i].x *= -1
        if (positions[i * 3 + 1] > BOUND_Y || positions[i * 3 + 1] < -BOUND_Y) velocities[i].y *= -1
        if (positions[i * 3 + 2] > BOUND_Z || positions[i * 3 + 2] < -BOUND_Z) velocities[i].z *= -1
      }
      nodeGeometry.attributes.position.needsUpdate = true

      if (frameCount % 4 === 0) rebuildLines()

      scene.rotation.y += (mouseX * 0.25 - scene.rotation.y) * 0.02 + 0.0009
      scene.rotation.x += (-mouseY * 0.15 - scene.rotation.x) * 0.02

      renderer.render(scene, camera)
    }
    animate()

    function handleResize() {
      width = mount.clientWidth
      height = mount.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      if (frameId) cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      nodeGeometry.dispose()
      lineGeometry.dispose()
      nodeMaterial.dispose()
      lineMaterial.dispose()
      renderer.dispose()
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} className={`absolute inset-0 ${className}`} aria-hidden="true" />
}
