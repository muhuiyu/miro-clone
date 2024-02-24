type Color = {
  r: number
  g: number
  b: number
}

type Camera = {
  x: number
  y: number
}

enum LayerType {
  Rectangle,
  Ellipse,
  Path,
  Text,
  Note,
}

type RectangleLayer = {
  type: LayerType.Rectangle
  x: number
  y: number
  width: number
  height: number
  fill: Color
  value?: string
}

type EllipseLayer = {
  type: LayerType.Ellipse
  x: number
  y: number
  width: number
  height: number
  fill: Color
  value?: string
}

type PathLayer = {
  type: LayerType.Path
  x: number
  y: number
  width: number
  height: number
  fill: Color
  points?: number[][]
  value?: string
}

type TextLayer = {
  type: LayerType.Text
  x: number
  y: number
  width: number
  height: number
  fill: Color
  value?: string
}

type NoteLayer = {
  type: LayerType.Note
  x: number
  y: number
  width: number
  height: number
  fill: Color
  value?: string
}

type Point = {
  x: number
  y: number
}

type XYWH = {
  x: number
  y: number
  width: number
  height: number
}

enum Side {
  Top = 1,
  Bottom = 2,
  Left = 4,
  Right = 8,
}

type CanvasState = 
  | {
      mode: CanvasMode.None
    }
  | {
      mode: CanvasMode.SelectionNet
      origin: Point
      current?: Point
    }
  | {
      mode: CanvasMode.Translating
      current: Point
    }
  | {
      mode: CanvasMode.Inserting
      layerType: LayerType.Ellipse | LayerType.Rectangle | LayerType.Text | LayerType.Note
    }
  | {
      mode: CanvasMode.Pressing
      origin: Point
    }
  | {
      mode: CanvasMode.Pencil
    }
  | {
      mode: CanvasMode.Resizing
      initialBounds: XYWH
      corner: Side
    }

enum CanvasMode {
  None,
  Pressing,
  SelectionNet,
  Translating,
  Inserting,
  Resizing,
  Pencil,
}

type Layer = RectangleLayer | EllipseLayer | PathLayer | TextLayer | NoteLayer

export { CanvasMode, LayerType, Side }
export type { Camera, CanvasState, Color, EllipseLayer, Layer, NoteLayer, PathLayer, Point, RectangleLayer, TextLayer, XYWH }

