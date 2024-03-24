import "./App.css"
import Input from "./components/Input"

function App() {
    return (
        <div className="App">
            <Input
                options={{
                    list: [
                        "Ada",
                        "Java",
                        "JavaScript",
                        "Brainfuck",
                        "LOLCODE",
                        "Node.js",
                        "Ruby on Rails"
                    ]
                }}
                style={{
                    padding: ".75rem 1rem"
                }}
                placeholder="Start typing…"
            />
        </div>
    )
}

export default App
