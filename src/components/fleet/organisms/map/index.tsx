import { createRef, FC, useEffect } from "react";

class TestCanvasDrawing {
  ctx: CanvasRenderingContext2D;

  constructor(stage: HTMLCanvasElement) {
    // Todo: なんかのライブラリに変換(描画とアニメーションだけ出来ればよいが)
    const ctx = stage.getContext("2d");
    if (!ctx) throw new Error("context ない");

    this.ctx = ctx;

    this.testDraw();
  }

  testDraw() {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(10, 10, 20, 20);
  }

  destroy() {}
}

export const Map: FC = () => {
  const testCanvas = createRef<HTMLCanvasElement>();

  useEffect(() => {
    // Todo: こんなんでいいのか？？？
    if (!testCanvas.current) throw new Error("canvas ない");

    const drawing = new TestCanvasDrawing(testCanvas.current);
    return () => drawing.destroy();
  }, [testCanvas]);

  return (
    <div>
      <p>Map</p>
      <canvas ref={testCanvas} />
    </div>
  );
};
