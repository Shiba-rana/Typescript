// Union types (OR)
type Status = "pending" | "approved" | "rejected"

function setStatus(Status: string): void {
    console.log(`Status set to: ${Status}`);
    
}
setStatus("approved")

// Intersection types (AND)
interface Colorful {
    color: string
}

interface Circle {
    radius: number
}

type ColorfulCircle = Colorful & Circle
let myCircle: ColorfulCircle = {
    color: "Red",
    radius: 10
}