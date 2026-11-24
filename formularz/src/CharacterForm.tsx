import { useState } from 'react'
import Postac, {type PostacProps} from './Postac.tsx';
import './App.css'

type OptionalFormData = Partial<PostacProps>;
const ikony: Record<string, string> = {
    "Człowiek": "ikony/1.png",
    "Elf": "ikony/2.png",
    "Krasnolud": "ikony/3.png",
    "Ork": "ikony/4.png"
}
function CharacterForm() {
  const [character, setCharacter] = useState<OptionalFormData[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    rasa: "",
    klasa: "",
    poziom: 1,
    opis: "",
    isPublic: true
  });
  function handleSubmit(event:React.) {

  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const {name, value, type} = event.target;

    setFormData(prev =>({
        ...prev,
        [name]: type === "checkbox" 
        ? (event.target as HTMLInputElement).checked
        : name === "poziom"
        ? Number(value)
        :value,

    }))
  }

  return (
    <div className='container'>
        <h2>Utwórz postać</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Podaj imię postaci: </label>
            <input id='nameChar' type='text' name='name' value={formData.name} onChange={handleChange} />

            <label htmlFor='klasaChar'>Podaj klasę postaci: </label>
            <select id='klasaChar' value={formData.klasa} onChange={handleChange}>
                <option value="wojownik">Wojownik</option>
                <option value="mag">Mag</option>
                <option value="lucznik">Łucznik</option>
            </select>

            <label htmlFor='rasaChar'>Podaj rasę postaci: </label>
            <select id='rasaChar' value={formData.rasa} onChange={handleChange}>
                <option value="czlowiek">Człowiek</option>
                <option value="elf">Elf</option>
                <option value="krasnolud">Krasnolud</option>
                <option value="ork">Ork</option>
            </select>

            <label htmlFor='poziomChar'>Podaj poziom postaci: </label>
            <input id='poziomChar' type='number' name='poziom' value={formData.poziom} onChange={handleChange} />

            <label htmlFor='opisChar'>Podaj poziom postaci: </label>
            <input id='opisChar' type='textarea' name='opis' value={formData.opis} onChange={handleChange} />

            <label htmlFor='public'>Czy postać ma być publiczna: </label>
            <input id='public' type='checkbox' name='public' checked={formData.isPublic} onChange={handleChange} />

            <button type='submit'>Utwórz postać</button>
        </form>
        <section>
            <h3>Utworzone postacie</h3>
            {postacie.map((postac) => (
                <Postac key={postac.id}{...postac}/>
            ))}
        </section>
    </div>
  )
}

export default CharacterForm