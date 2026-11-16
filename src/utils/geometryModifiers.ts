import * as THREE from "three"

/**
 * ジオメトリの頂点を波状に揺らす、高さを変えるなどの処理
 */
export function deformGeometry(geometry: THREE.BufferGeometry) {
  const positionAttribute = geometry.attributes.position

  // 頂点を一つずつ走査して座標を書き換える
  for (let i = 0; i < positionAttribute.count; i++) {
    const x = positionAttribute.getX(i)
    const y = positionAttribute.getY(i)
    const z = positionAttribute.getZ(i)

    // 例：Z座標を少し持ち上げる、またはsin波でうねらせるなど
    const newZ = z + Math.sin(x * 0.5) * 0.2 * 0.05

    positionAttribute.setZ(i, newZ)
  }

  // 変更をThree.js側に伝える（これがないと画面が更新されない）
  positionAttribute.needsUpdate = true

  // 法線（光の当たり方）も再計算が必要な場合がある
  geometry.computeVertexNormals()
}
