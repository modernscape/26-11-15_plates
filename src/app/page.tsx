import ModelViewerDynamic from "@/components/ModelViewerDynamic"

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Blender Model in Next.js</h1>
      <p className="text-gray-600 mb-6">
        Blenderから書き出したGLBモデルをReact Three Fiberで制御しています。
      </p>

      {/* ラッパーコンポーネントを配置 */}
      <ModelViewerDynamic />
    </main>
  )
}
