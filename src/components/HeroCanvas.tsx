import "./HeroCanvas.css"
type HeroCanvasProps = {
    refs: React.RefObject<HTMLCanvasElement>
}
export default function HeroCanvas(props: HeroCanvasProps) {
    return (
        <canvas className="hero-canvas" ref = {props.refs}>

        </canvas>
    )
}