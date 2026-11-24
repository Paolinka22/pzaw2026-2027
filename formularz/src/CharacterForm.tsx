import { useState } from 'react'
import Postac, {type PostacProps} from './Postac.tsx';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

type FormData = Omit<PostacProps, "id" | "ikona">;

const ikony: Record<string, string> = {
    "Człowiek": "ikony/1.jpg",
    "Elf": "ikony/2.jpg",
    "Krasnolud": "ikony/3.jpg",
    "Ork": "ikony/4.jpg"
}
function CharacterForm() {
  const [character, setCharacter] = useState<PostacProps[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    rasa: "",
    klasa: "",
    poziom: 1,
    opis: "",
    isPublic: true
  });
  const [errors, setErrors] = useState<Partial<Record<keyof PostacProps, string>>>({});

  function validateForm(formData: FormData) {
    const errors: Partial<Record<keyof PostacProps, string>> = {};

    if (!formData.name.trim() || !formData.rasa){
        errors.name = "Wprowadź imię!";
    } else if (formData.name.trim().length<3 || formData.name.trim().length>20){
        errors.name = "Nazwa musi mieć od 3 do 20 znaków!";
    }
    if (!formData.klasa){
        errors.klasa = "Wybierz klasę postaci!";
    }
    if (!formData.rasa){
        errors.rasa = "Wybierz rase postaci!";
    }
    if (formData.poziom<1 || formData.poziom>100){
        errors.poziom = "Poziom od 1 do 100!";
    }
    if (formData.opis.trim().length>200){
        errors.opis = "Opis może zawierać maksymalnie 200 znaków!";
    }
    return errors;
  }
  function handleSubmit(event:React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationError = validateForm(formData);
    setErrors(validationError);

    if(Object.keys(validationError).length > 0){
        console.error("Formularz zawiera błędy");
        return;
    }
    console.log("Formularz jest poprawny");

    const newCharacter: PostacProps = {
        id: crypto.randomUUID(),
        ...formData,
        ikona: ikony[formData.rasa]
    };

    setCharacter([...character, newCharacter]);
    setFormData({
        name: "",
        rasa: "",
        klasa: "",
        poziom: 1,
        opis: "",
        isPublic: true
    });
    setErrors({});
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

    }));
    setErrors(prev => ({
        ...prev,
        [name]: ""
    }));
  }

  return (
    <div className='container'>
        <h2>Utwórz postać</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor='name'>Podaj imię postaci: </label>
                <input className={`form-control ${errors.name ? "is-invalid" : ""}`} id='nameChar' type='text' name='name' value={formData.name} onChange={handleChange} />
                {errors && (<div className="invalid-feedback">{errors.name}</div>)}
            </div>

            <div className="form-group">
                <label htmlFor='klasaChar'>Podaj klasę postaci: </label>
                <select className={`form-control ${errors.klasa ? "is-invalid" : ""}`} id='klasaChar' name="klasa" value={formData.klasa} onChange={handleChange}>
                    <option value="">Wybierz opcję</option>
                    <option value="Wojownik">Wojownik</option>
                    <option value="Mag">Mag</option>
                    <option value="Łucznik">Łucznik</option>
                </select>
                {errors && (<div className="invalid-feedback">{errors.klasa}</div>)}
            </div>

            <div className="form-group">
                <label htmlFor='rasaChar'>Podaj rasę postaci: </label>
                <select className={`form-control ${errors.rasa ? "is-invalid" : ""}`} id='rasaChar' name='rasa' value={formData.rasa} onChange={handleChange}>
                    <option value="">Wybierz opcję</option>
                    <option value="Człowiek">Człowiek</option>
                    <option value="Elf">Elf</option>
                    <option value="Krasnolud">Krasnolud</option>
                    <option value="Ork">Ork</option>
                </select>
                {errors && (<div className="invalid-feedback">{errors.rasa}</div>)}
            </div>

            <div className="form-group">
                <label htmlFor='poziomChar'>Podaj poziom postaci: </label>
                <input className={`form-control ${errors.poziom ? "is-invalid" : ""}`} id='poziomChar' type='number' name='poziom' value={formData.poziom} onChange={handleChange} />
                {errors && (<div className="invalid-feedback">{errors.poziom}</div>)}
            </div>

            <div className="form-group">
                <label htmlFor='opisChar'>Podaj opis postaci: </label>
                <textarea  className={`form-control ${errors.opis ? "is-invalid" : ""}`} id='opisChar' name='opis' value={formData.opis} onChange={handleChange} />
                <div className="d-flex justify-content-between">
                    {errors && (<small className="text-danger ">{errors.opis}</small>)}
                    <small className={formData.opis.length > 200 ? "text-danger" : "text-muted"}>{formData.opis.length}/200</small>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor='public'>Czy postać ma być publiczna: </label>
                <input id='public' className="form-check-input" type='checkbox' name='isPublic' checked={formData.isPublic} onChange={handleChange} />
            </div>
            <div className="btn-group" role="group" aria-label="First group">
                <button type='submit' className="btn btn-primary">Utwórz postać</button>
                <button type='button' className="btn btn-primary" onClick={()=>setFormData({name: "", rasa: "", klasa: "", poziom: 1, opis: "", isPublic: true})}>Wyczyść formularz</button>
            </div>
        </form>
        <section className="mt-4">
            <h3>Utworzone postacie</h3>
            <div className="row g-3">
            {character.map((postac) => (
                <Postac key={postac.id} {...postac}/>
            ))}
            </div>
        </section>
    </div>
  )
}

export default CharacterForm