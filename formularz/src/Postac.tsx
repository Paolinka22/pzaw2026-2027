import 'bootstrap/dist/css/bootstrap.min.css'

export interface PostacProps {
    /** unikatowy identyfikator postaci */
    id: string,
    /** imię postaci */
    name: string
    /** rasa postaci */
    rasa: string
    /** ikona postaci */
    ikona: string
    /** klasa postaci */
    klasa: string
    /** poziom postaci */
    poziom: number 
    /** opis postaci */
    opis: string
    /** czy postać jest publiczna czy prywatna */
    isPublic: boolean
}

export function Postac({ id, name, rasa, ikona, klasa, poziom, opis, isPublic}: PostacProps) {
    return (
        <div className="col-6 col-md-4 col-xl-3">
            <div className="card h-100 shadow-sm">

                <div className="card-body">
                    <small className="card-text small mb-2">{isPublic===true ? "Publiczna" : "Prywatna"} <br/></small>

                    <img src={ikona} className="card-img-top character-icon" alt={ikona} />

                    <h4 className="card-title mt-2">Imię: {name}</h4>

                    <p className="card-text small mb-2">Rasa: {rasa}</p>

                    <p className="card-text small mb-2">Klasa: {klasa}</p>

                    <p className="card-text small mb-2">Poziom: {poziom}</p>

                    <p className="card-text small">Opis:<br/>{opis}<br/></p>
                </div>
            </div>
        </div>
    )
};
export default Postac;