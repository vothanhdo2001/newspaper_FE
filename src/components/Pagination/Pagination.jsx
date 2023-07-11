import React from 'react';
import Link from 'next/link';

const Pagination = ({ currentPage, totalPages, url, IsSearch }) => {
    if (totalPages === 1) {
        // Nếu totalPages là 1, trả về null để không hiển thị Pagination
        return null;
    }
    let pageNumbers = [];
    const pageRange = 2; // Số trang trước và sau trang hiện tại bạn muốn hiển thị

    // Giới hạn trang hiện tại trong khoảng từ 1 đến tổng số trang
    const normalizedCurrentPage = Math.max(1, Math.min(currentPage, totalPages));

    for (let i = normalizedCurrentPage - pageRange; i <= normalizedCurrentPage + pageRange; i++) {
        if (i > 0 && i <= totalPages) {
            pageNumbers.push(i);
        }
    }
    if (IsSearch) {
        return (
            <div style={{ textAlign: 'center' }}>
                {currentPage > 1 && (
                    <Link href={`/${url}&page=${currentPage - 1}`}>
                        <a className="pagination-button">
                            &lt;&lt; Previous
                        </a>
                    </Link>
                )}

                {currentPage > pageRange + 1 && (
                    <Link href={`/${url}&page=1`}>
                        <a className="pagination-button">
                            1
                        </a>
                    </Link>
                )}

                {currentPage > pageRange + 2 && (
                    <span className="pagination-dots">...</span>
                )}

                {pageNumbers.map((pageNumber) => (
                    <Link key={pageNumber} href={`/${url}&page=${pageNumber}`}>
                        <a className={`pagination-button ${pageNumber === normalizedCurrentPage ? 'active' : ''}`}>
                            {pageNumber}
                        </a>
                    </Link>
                ))}

                {currentPage < totalPages - pageRange - 1 && (
                    <span className="pagination-dots">...</span>
                )}

                {currentPage < totalPages - pageRange && (
                    <Link href={`/${url}&page=${totalPages}`}>
                        <a className="pagination-button">
                            {totalPages}
                        </a>
                    </Link>
                )}

                {currentPage < totalPages && (
                    <Link href={`/${url}&page=${parseInt(currentPage) + 1}`}>
                        <a className="pagination-button">
                            Next &gt;&gt;
                        </a>
                    </Link>
                )}

                <p>Page {normalizedCurrentPage} of {totalPages}</p>
                <style jsx>{`
                div {
                    text-align: center;
                }

                .pagination-button {
                    margin: 0 5px;
                    display: inline-block;
                    text-decoration: none;
                    padding: 5px 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    color: #FFF;
                    background-color: #0099CC;
                }

                .pagination-button.active {
                    font-weight: bold;
                    background-color: #ccc;
                }

                .pagination-dots {
                    margin: 0 5px;
                }
            `}</style>
            </div>
        );
    }
    else
        return (
            <div style={{ textAlign: 'center' }}>
                {currentPage > 1 && (
                    <Link href={`/${url}?page=${currentPage - 1}`}>
                        <a className="pagination-button">
                            &lt;&lt; Previous
                        </a>
                    </Link>
                )}

                {currentPage > pageRange + 1 && (
                    <Link href={`/${url}?page=1`}>
                        <a className="pagination-button">
                            1
                        </a>
                    </Link>
                )}

                {currentPage > pageRange + 2 && (
                    <span className="pagination-dots">...</span>
                )}

                {pageNumbers.map((pageNumber) => (
                    <Link key={pageNumber} href={`/${url}?page=${pageNumber}`}>
                        <a className={`pagination-button ${pageNumber === normalizedCurrentPage ? 'active' : ''}`}>
                            {pageNumber}
                        </a>
                    </Link>
                ))}

                {currentPage < totalPages - pageRange - 1 && (
                    <span className="pagination-dots">...</span>
                )}

                {currentPage < totalPages - pageRange && (
                    <Link href={`/${url}?page=${totalPages}`}>
                        <a className="pagination-button">
                            {totalPages}
                        </a>
                    </Link>
                )}

                {currentPage < totalPages && (
                    <Link href={`/${url}?page=${parseInt(currentPage) + 1}`}>
                        <a className="pagination-button">
                            Next &gt;&gt;
                        </a>
                    </Link>
                )}

                <p>Page {normalizedCurrentPage} of {totalPages}</p>
                <style jsx>{`
                div {
                    text-align: center;
                }

                .pagination-button {
                    margin: 0 5px;
                    display: inline-block;
                    text-decoration: none;
                    padding: 5px 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    color: #FFF;
                    background-color: #0099CC;
                }

                .pagination-button.active {
                    font-weight: bold;
                    background-color: #ccc;
                }

                .pagination-dots {
                    margin: 0 5px;
                }
            `}</style>
            </div>
        );
};

export default Pagination;
