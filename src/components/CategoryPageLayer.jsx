import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryPageLayer = () => {

    const knowledgeAreas = [
        { title: "Customer Service", image: "/img/programs/program-img-1.png" },
        { title: "Leadership and Management", image: "/img/programs/program-img-2.png" },
        { title: "Personal & Development Skills", image: "/img/programs/program-img-3.png" },
        { title: "Sales and Marketing", image: "/img/programs/program-img-4.png" },
        { title: "Administration and Secretarial", image: "/img/programs/program-img-5.png" },
        { title: "Strategy and Strategic Planning", image: "/img/programs/program-img-6.png" }
    ];
    return (
        <div className="card h-100 p-0 radius-12">
            <div className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center flex-wrap gap-3 justify-content-end">
                <div>
                <button
                    type="button"
                    className="btn btn-primary text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-right gap-2"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalEdit"
                >
                    <Icon
                        icon="ic:baseline-plus"
                        className="icon text-xl line-height-1"
                    />
                    Add Course Type
                </button>
                </div>
                {/* <div className="d-flex align-items-center flex-wrap gap-3">
                    <span className="text-md fw-medium text-secondary-light mb-0">Show</span>
                    <select className="form-select form-select-sm w-auto ps-12 py-6 radius-12 h-40-px" defaultValue="Select Number">
                        <option value="Select Number" disabled>
                            Select Number
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <form className="navbar-search">
                        <input
                            type="text"
                            className="bg-base h-40-px w-auto"
                            name="search"
                            placeholder="Search"
                        />
                        <Icon icon="ion:search-outline" className="icon" />
                    </form>
                    <select className="form-select form-select-sm w-auto ps-12 py-6 radius-12 h-40-px" defaultValue="Select Status">
                        <option value="Select Status" disabled>
                            Select Status
                        </option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div> */}
                <button
                    type="button"
                    className="btn btn-primary text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-right gap-2"
                    data-bs-toggle="modal"
                    data-bs-target="#cartegoryModalEdit"
                >
                    <Icon
                        icon="ic:baseline-plus"
                        className="icon text-xl line-height-1"
                    />
                    Add Category
                </button>
            </div>
          
            <div className="card-body p-24">
                <div className="table-responsive scroll-sm">
                    <table className="table bordered-table sm-table mb-0">
                        <thead>
                            <tr>
                                {/* <th scope="col">
                                    <div className="d-flex align-items-center gap-10">
                                        <div className="form-check style-check d-flex align-items-center">
                                            <input
                                                className="form-check-input radius-4 border input-form-dark"
                                                type="checkbox"
                                                name="checkbox"
                                                id="selectAll"
                                            />
                                        </div>
                                        S.L
                                    </div>
                                </th> */}
                                <th scope="col">S.No</th>
                                <th scope="col">Category Type</th>
                                <th scope="col">Course Type</th>
                                <th scope="col">Image</th>
                                <th scope="col">Action</th>


                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center gap-10">
                                        <div className="form-check style-check d-flex align-items-center">
                                            <input
                                                className="form-check-input radius-4 border border-neutral-400"
                                                type="checkbox"
                                                name="checkbox"
                                            />
                                        </div>
                                        01
                                    </div>
                                </td>
                                {/* <td>25 Jan 2024</td> */}
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="assets/images/user-list/user-list1.png"
                                            alt="Wowdash"
                                            className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                        />
                                        <div className="flex-grow-1">
                                            <span className="text-md mb-0 fw-normal text-secondary-light">
                                                Kathryn Murphy
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="text-md mb-0 fw-normal text-secondary-light">
                                        osgoodwy@gmail.com
                                    </span>
                                </td>
                                <td>
                                    <span className="text-md mb-0 fw-normal text-secondary-light">
                                        Image
                                    </span>
                                </td>

                                <td className="text-center">
                                    <div className="d-flex align-items-center gap-10 justify-content-center">
                                        <button
                                            type="button"
                                            className="bg-info-focus bg-hover-info-200 text-info-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                                        >
                                            <Icon
                                                icon="majesticons:eye-line"
                                                className="icon text-xl"
                                            />
                                        </button>
                                        <button
                                            type="button"
                                            className="bg-success-focus text-success-600 bg-hover-success-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                                        >
                                            <Icon icon="lucide:edit" className="menu-icon" />
                                        </button>
                                        <button
                                            type="button"
                                            className="remove-item-btn bg-danger-focus bg-hover-danger-200 text-danger-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                                        >
                                            <Icon
                                                icon="fluent:delete-24-regular"
                                                className="menu-icon"
                                            />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center gap-10">
                                        <div className="form-check style-check d-flex align-items-center">
                                            <input
                                                className="form-check-input radius-4 border border-neutral-400"
                                                type="checkbox"
                                                name="checkbox"
                                            />
                                        </div>
                                        01
                                    </div>
                                </td>
                                {/* <td>25 Jan 2024</td> */}
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="assets/images/user-list/user-list1.png"
                                            alt="Wowdash"
                                            className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                        />
                                        <div className="flex-grow-1">
                                            <span className="text-md mb-0 fw-normal text-secondary-light">
                                                Kathryn Murphy
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="text-md mb-0 fw-normal text-secondary-light">
                                        osgoodwy@gmail.com
                                    </span>
                                </td>
                                <td>
                                    <span className="text-md mb-0 fw-normal text-secondary-light">
                                        Image
                                    </span>
                                </td>

                                <td className="text-center">
                                    <div className="d-flex align-items-center gap-10 justify-content-center">
                                        <button
                                            type="button"
                                            className="bg-info-focus bg-hover-info-200 text-info-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                                        >
                                            <Icon
                                                icon="majesticons:eye-line"
                                                className="icon text-xl"
                                            />
                                        </button>
                                        <button
                                            type="button"
                                            className="bg-success-focus text-success-600 bg-hover-success-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                                        >
                                            <Icon icon="lucide:edit" className="menu-icon" />
                                        </button>
                                        <button
                                            type="button"
                                            className="remove-item-btn bg-danger-focus bg-hover-danger-200 text-danger-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                                        >
                                            <Icon
                                                icon="fluent:delete-24-regular"
                                                className="menu-icon"
                                            />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center gap-10">
                                        <div className="form-check style-check d-flex align-items-center">
                                            <input
                                                className="form-check-input radius-4 border border-neutral-400"
                                                type="checkbox"
                                                name="checkbox"
                                            />
                                        </div>
                                        01
                                    </div>
                                </td>
                                {/* <td>25 Jan 2024</td> */}
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="assets/images/user-list/user-list1.png"
                                            alt="Wowdash"
                                            className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                        />
                                        <div className="flex-grow-1">
                                            <span className="text-md mb-0 fw-normal text-secondary-light">
                                                Kathryn Murphy
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="text-md mb-0 fw-normal text-secondary-light">
                                        osgoodwy@gmail.com
                                    </span>
                                </td>
                                <td>
                                    <span className="text-md mb-0 fw-normal text-secondary-light">
                                        Image
                                    </span>
                                </td>

                                <td className="text-center">
                                    <div className="d-flex align-items-center gap-10 justify-content-center">
                                        <button
                                            type="button"
                                            className="bg-info-focus bg-hover-info-200 text-info-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                                        >
                                            <Icon
                                                icon="majesticons:eye-line"
                                                className="icon text-xl"
                                            />
                                        </button>
                                        <button
                                            type="button"
                                            className="bg-success-focus text-success-600 bg-hover-success-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                                        >
                                            <Icon icon="lucide:edit" className="menu-icon" />
                                        </button>
                                        <button
                                            type="button"
                                            className="remove-item-btn bg-danger-focus bg-hover-danger-200 text-danger-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                                        >
                                            <Icon
                                                icon="fluent:delete-24-regular"
                                                className="menu-icon"
                                            />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center gap-10">
                                        <div className="form-check style-check d-flex align-items-center">
                                            <input
                                                className="form-check-input radius-4 border border-neutral-400"
                                                type="checkbox"
                                                name="checkbox"
                                            />
                                        </div>
                                        01
                                    </div>
                                </td>
                                {/* <td>25 Jan 2024</td> */}
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="assets/images/user-list/user-list1.png"
                                            alt="Wowdash"
                                            className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                        />
                                        <div className="flex-grow-1">
                                            <span className="text-md mb-0 fw-normal text-secondary-light">
                                                Kathryn Murphy
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="text-md mb-0 fw-normal text-secondary-light">
                                        osgoodwy@gmail.com
                                    </span>
                                </td>
                                <td>
                                    <span className="text-md mb-0 fw-normal text-secondary-light">
                                        Image
                                    </span>
                                </td>

                                <td className="text-center">
                                    <div className="d-flex align-items-center gap-10 justify-content-center">
                                        <button
                                            type="button"
                                            className="bg-info-focus bg-hover-info-200 text-info-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                                        >
                                            <Icon
                                                icon="majesticons:eye-line"
                                                className="icon text-xl"
                                            />
                                        </button>
                                        <button
                                            type="button"
                                            className="bg-success-focus text-success-600 bg-hover-success-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                                        >
                                            <Icon icon="lucide:edit" className="menu-icon" />
                                        </button>
                                        <button
                                            type="button"
                                            className="remove-item-btn bg-danger-focus bg-hover-danger-200 text-danger-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                                        >
                                            <Icon
                                                icon="fluent:delete-24-regular"
                                                className="menu-icon"
                                            />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center gap-10">
                                        <div className="form-check style-check d-flex align-items-center">
                                            <input
                                                className="form-check-input radius-4 border border-neutral-400"
                                                type="checkbox"
                                                name="checkbox"
                                            />
                                        </div>
                                        01
                                    </div>
                                </td>
                                {/* <td>25 Jan 2024</td> */}
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="assets/images/user-list/user-list1.png"
                                            alt="Wowdash"
                                            className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                        />
                                        <div className="flex-grow-1">
                                            <span className="text-md mb-0 fw-normal text-secondary-light">
                                                Kathryn Murphy
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="text-md mb-0 fw-normal text-secondary-light">
                                        osgoodwy@gmail.com
                                    </span>
                                </td>
                                <td>
                                    <span className="text-md mb-0 fw-normal text-secondary-light">
                                        Image
                                    </span>
                                </td>

                                <td className="text-center">
                                    <div className="d-flex align-items-center gap-10 justify-content-center">
                                        <button
                                            type="button"
                                            className="bg-info-focus bg-hover-info-200 text-info-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                                        >
                                            <Icon
                                                icon="majesticons:eye-line"
                                                className="icon text-xl"
                                            />
                                        </button>
                                        <button
                                            type="button"
                                            className="bg-success-focus text-success-600 bg-hover-success-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                                        >
                                            <Icon icon="lucide:edit" className="menu-icon" />
                                        </button>
                                        <button
                                            type="button"
                                            className="remove-item-btn bg-danger-focus bg-hover-danger-200 text-danger-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                                        >
                                            <Icon
                                                icon="fluent:delete-24-regular"
                                                className="menu-icon"
                                            />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mt-24">
                    <span>Showing 1 to 10 of 12 entries</span>
                    <ul className="pagination d-flex flex-wrap align-items-center gap-2 justify-content-center">
                        <li className="page-item">
                            <Link
                                className="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px  text-md"
                                to="#"
                            >
                                <Icon icon="ep:d-arrow-left" className="" />
                            </Link>
                        </li>
                        <li className="page-item">
                            <Link
                                className="page-link text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md bg-primary-600 text-white"
                                to="#"
                            >
                                1
                            </Link>
                        </li>
                        <li className="page-item">
                            <Link
                                className="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px"
                                to="#"
                            >
                                2
                            </Link>
                        </li>
                        <li className="page-item">
                            <Link
                                className="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md"
                                to="#"
                            >
                                3
                            </Link>
                        </li>
                        <li className="page-item">
                            <Link
                                className="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md"
                                to="#"
                            >
                                4
                            </Link>
                        </li>
                        <li className="page-item">
                            <Link
                                className="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md"
                                to="#"
                            >
                                5
                            </Link>
                        </li>
                        <li className="page-item">
                            <Link
                                className="page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px  text-md"
                                to="#"
                            >
                                {" "}
                                <Icon icon="ep:d-arrow-right" className="" />{" "}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* add course type model */}
            <div
                className="modal fade"
                id="exampleModalEdit"
                tabIndex={-1}
                aria-labelledby="exampleModalEditLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog modal-dialog-centered">
                    <div className="modal-content radius-16 bg-base">
                        <div className="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
                            <h1 className="modal-title fs-5" id="exampleModalEditLabel">
                                Add Course Type
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body p-24">
                            <div className="row gy-3">
                                <div className="col-12">
                                    <label className="form-label">Name </label>
                                    <input type="text" name="#0" className="form-control" />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Image </label>
                                    <input
                                        className="form-control form-control-sm"
                                        name="#0"
                                        type="file"
                                    />
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary-600 text-sm">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* add category model */}
            <div
                className="modal fade"
                id="cartegoryModalEdit"
                tabIndex={-1}
                aria-labelledby="cartegoryModalEdit"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog modal-dialog-centered">
                    <div className="modal-content radius-16 bg-base">
                        <div className="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
                            <h1 className="modal-title fs-5" id="cartegoryModalEditLabel">
                                Add Course Type
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body p-24">
                            <div className="row gy-3">
                                {/* <div className="col-12">
                                    <label className="form-label">Name </label>
                                    <input type="text" name="#0" className="form-control" />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Image </label>
                                    <input
                                        className="form-control form-control-sm"
                                        name="#0"
                                        type="file"
                                    />
                                </div> */}
                                  <div className="col-12">
                                    <label className="form-label">Category Type</label>
                                </div>
                                <div className="col-12">
                                    {/* <label className="form-label">Category Type</label> */}
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-600 not-active  text-sm dropdown-toggle toggle-icon form-control"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            {" "}
                                            Online{" "}
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link
                                                    className="dropdown-item  rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 form-control"
                                                    to="#"
                                                >
                                                    Offline
                                                </Link>
                                            </li>
                                            {/* <li>
                                                <Link
                                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                                    to="#"
                                                >
                                                    Primary action
                                                </Link>
                                            </li> */}
                                            {/* <li>
                                                <Link
                                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                                    to="#"
                                                >
                                                    Something else
                                                </Link>
                                            </li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Course Type</label>
                                </div>
                                <div className="col-12">
                                    {/* <label className="form-label">Category Type</label> */}
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-600 not-active px-12 py-6 text-sm dropdown-toggle toggle-icon form-control"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            {" "}
                                            Customer Service{" "}
                                        </button>
                                        <ul className="dropdown-menu">
                                            {knowledgeAreas && knowledgeAreas.map(ival => {
                                                return (
                                                    <>
                                                        <li>
                                                            <Link
                                                                className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 form-control"
                                                                to="#"
                                                            >
                                                                {ival.title}
                                                            </Link>
                                                        </li>
                                                    </>
                                                )
                                            })}

                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary-600 text-sm">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default CategoryPageLayer