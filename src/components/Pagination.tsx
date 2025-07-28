
interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    onPageSizeChange: (pageSize: number) => void;
}
export default function Pagination({ totalPages, currentPage, onPageChange, onPageSizeChange }: PaginationProps) {
    return (
        <div className="w-2/3 flex items-center justify-around">
            <div>
                <select className="border-2 border-gray-300 rounded-md p-4" onChange={(e) => onPageSizeChange(parseInt(e.target.value))}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                </select>
            </div>
            <div>
                {totalPages > 0 && (
                    <div>

                        <button className={`border-2 border-gray-300 rounded-md p-4 ${currentPage === 0 ? "bg-gray-500 text-white" : ""}`} disabled={currentPage === 0} onClick={() => onPageChange(currentPage - 1)}>Previous</button>

                        {Array.from({ length: totalPages }, (_, index) => (
                            <button className={`border-2 border-gray-300 rounded-md p-4 ${currentPage === index ? "bg-blue-500 text-white" : ""}`} key={index} onClick={() => onPageChange(index)}>{index + 1}</button>
                        ))}

                        <button className={`border-2 border-gray-300 rounded-md p-4 ${currentPage === totalPages - 1 ? "bg-gray-500 text-white" : ""}`} disabled={currentPage === totalPages - 1} onClick={() => onPageChange(currentPage + 1)}>Next</button>


                    </div>
                )}

            </div>

        </div>
    )
}