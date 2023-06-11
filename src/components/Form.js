import "./Form.css"

const Form = () => {
  return (
    <div className="formMain">
        <form>
        <input className="MainInput" type="text" placeholder="Jméno zvířete..." /><br/>
        <input className="MainInput" type="text" placeholder="Zvíře..." /><br/>
        <input className="MainInput" type="text" placeholder="Rasa..." /><br/>
        <input className="MainInput" type="text" placeholder="Město..." /><br/>
        <label for="file-photo" className="file">Přidat fotku</label>
        <input id="file-photo" type="file"  /><br/>
        <input className="form-submit" type="submit" />
        </form>
    </div>
  )
}

export default Form
