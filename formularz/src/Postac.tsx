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
            <article className="card h-100 shadow-sm">
                <img src={ikona} className="card-img-top" alt={ikona} />

                <div className="card-body">
                    {isPublic===true ? (
                        <small className="text-secondary">Postać publiczna</small>
                    ) : (
                        <small className="text-secondary">Postać prywatna</small>
                    )}
                    <small className="text-secondary">{rasa}</small>

                    <h6 className="card-title mt-1">{name}</h6>

                    <p className="text-secondary small mb-2">{rasa}</p>

                    <p className="text-secondary small mb-2">{klasa}</p>

                    <p className="text-secondary small mb-1">Poziom: {poziom}</p>

                    <p className="text-secondary small mb-2">{opis}</p>
                </div>
            </article>
        </div>
    )
};
export default Postac;