// import { MagneticButton } from "./components/MagneticButton"
import InteractiveButton from "./components/MagneticButton/InteractiveButton"

function App() {

  return (
    <main>
      {/* <MagneticButton>
        <button type="button" className="btn group">
          <div className="flex flex-col h-6 overflow-hidden">
            <span className="transition-transform duration-200 group-hover:-translate-y-full">Magnetic Button</span>
            <span className="transition-transform duration-200 group-hover:-translate-y-full">Magnetic Button</span>
          </div>
        </button>
      </MagneticButton> */}
      <InteractiveButton />
    </main>
  )
}

export default App
