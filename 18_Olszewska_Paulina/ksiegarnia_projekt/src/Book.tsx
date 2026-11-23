export interface BookProps {
    /** unikatowy identyfikator książki */
    id: string,
    /** tytuł książki */
    title: string
    /** relatywna ścieżka do pliku okładki */
    coverImg: string
    /** oryginalna cena sugerowana przez wydawcę wyrażona w złotówkach */
    originalPrice: number
    /** opcjonalne; cena po przecenie wyrażona w złotówkach */
    discountedPrice: number | null
    /** lista z autorami książki, każda pozycja zaczyna się od nazwiska */
    authors: string[]
    /** nazwa głównej kategorii, w której znajduje się książka */
    category: string
    /** liczbę dostępnych sztuk */
    availableCopies: number
}
export function Book({ id, title, coverImg, originalPrice, discountedPrice, authors, category, availableCopies }: BookProps) {
    return (
        <div className="col-6 col-md-4 col-xl-3">
            <article className="card h-100 shadow-sm">
                <img src={coverImg} className="card-img-top" alt={title} />

                <div className="card-body">
                    <small className="text-secondary">{category}</small>

                    <h6 className="card-title mt-1">{title}</h6>

                    <p className="text-secondary small mb-2">{authors.map(author => [...author])}</p>

                    {discountedPrice !== null ? (
                        <h6 className="text-primary">
                            <s className="text-danger">{originalPrice.toFixed(2)} zł</s>
                            <span> {discountedPrice.toFixed(2)} zł</span>
                        </h6>
                    ) : (
                        <h6 className="text-primary">
                            <span>{originalPrice.toFixed(2)} zł</span>
                        </h6>
                    )}

                    <p className="text-secondary small mb-1">Ilość kopii: {availableCopies}</p>

                    <div className="d-flex gap-1">
                        <button className="btn btn-primary btn-sm flex-grow-1">Dodaj do koszyka</button>
                    </div>
                </div>
            </article>
        </div>
    )
};
export default Book;