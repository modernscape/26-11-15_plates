"use client"

import dynamic from "next/dynamic"

// ModelViewerをSSR無効（クライアントサイドのみ）で動的ロード
const ModelViewer = dynamic(() => import("@/components/ModelViewer"), {
  ssr: false,
  loading: () => (
    <p className="text-center py-20 text-gray-400">3Dモデルを読み込み中...</p>
  ),
})

export default function ModelViewerDynamic() {
  return <ModelViewer />
}
