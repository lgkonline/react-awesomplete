import "awesomplete/awesomplete.css"
const Awesomplete = require("awesomplete")

export interface InputProps extends React.InputHTMLAttributes<HTMLElement> {
    options: Awesomplete.Options
}

export default function Input({ options, ...props }: InputProps) {
    let awesomplete: Awesomplete | undefined = undefined

    return (
        <input
            ref={(ref) => {
                if (ref) {
                    if (awesomplete !== undefined) {
                        awesomplete.destroy()
                    }

                    awesomplete = new Awesomplete(ref, options)
                }
            }}
            {...props}
        />
    )
}
