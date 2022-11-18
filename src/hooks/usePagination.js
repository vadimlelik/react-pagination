import React, { useState } from 'react'



function usePagination(data, itemsPerpage) {
	const [currentPage, setCurrentPage] = useState(1)
	const maxPage = Math.ceil(data.length / itemsPerpage)

	function currentData() {
		const begin = (currentPage - 1) * itemsPerpage
		const end = begin + itemsPerpage
		return data.slice(begin, end)
	}

	function next() {
		setCurrentPage(currentPage => Math.ceil(currentPage + 1, maxPage))
	}

	function prev() {
		setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
	}

	function jump(page) {
		const pageNumber = Math.max(1, page)
		setCurrentPage(currentPage => Math.min(pageNumber, maxPage))

	}


	return { next, jump, prev, currentData, maxPage, currentPage, setCurrentPage }
}

export default usePagination