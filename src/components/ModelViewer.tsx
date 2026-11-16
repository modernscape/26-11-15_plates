"use client"

import React, { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useGLTF, Center, Environment } from "@react-three/drei"
import * as THREE from "three"

// モデルをロードして描画する内部コンポーネント
function Model() {
  // public/models/sample.glb を読み込む
  const { scene } = useGLTF("/models/plates.glb")
  const modelRef = useRef<THREE.Group>(null)

  // 例：useFrameを使って毎フレーム自動回転させる制御（不要なら削除可能）
  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.2
    }
  })

  return (
    <Center>
      <primitive ref={modelRef} object={scene} scale={1} />
    </Center>
  )
}

export default function ModelViewer() {
  return (
    // <div className="w-full h-[500px] bg-gray-900 rounded-xl overflow-hidden">
    <div className="fixed inset-0 w-full h-full bg-gray-950 overflow-hidden">
      <Canvas camera={{ position: [0, 10, 25], fov: 50 }}>
        {/* 環境光と平行光源 */}
        {/* <ambientLight intensity={10.5} />
        <directionalLight position={[10, 20, 15]} intensity={2} /> */}

        {/* HDR環境マップの読み込みと背景表示 */}
        <Environment
          files="/hdr/kloppenheim_06_puresky_4k.hdr"
          background // ← このプロパティをつけると背景として描き出されます
          blur={0.05} // 必要に応じて背景を少しぼかす（0〜1）
        />

        {/* 3Dモデル本体 */}
        <Model />

        {/* マウスでの回転・ズーム操作を有効にする */}
        <OrbitControls enableZoom={true} autoRotate={false} />
      </Canvas>
    </div>
  )
}
