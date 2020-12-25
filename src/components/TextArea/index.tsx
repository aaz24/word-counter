import { ChangeEvent, ReactElement } from 'react'

interface Props {
   onChange: (value: string) => void
}

export default function TextArea({ onChange }: Props): ReactElement {
   const inputChanged = (event: ChangeEvent<HTMLTextAreaElement>) => {
      onChange(event.target.value)
   }

   return (
      <div className="form-group">
          <label className="h5 text-muted" htmlFor="Label">
          Enter Text Below
          </label>
          <textarea
          className="form-control"
          placeholder="Some text here"
          onChange={inputChanged}
          />
      </div>
  )

}
