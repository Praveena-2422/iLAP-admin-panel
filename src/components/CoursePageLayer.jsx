import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CoursePageLayer = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const [rating, setRating] = useState(0);

    // const handleRatingClick = (starValue) => {
    //     setRating(starValue);
    //     if (onChange) {
    //         onChange(starValue);
    //     }
    // };

    const nextStep = () => {
        if (currentStep < 5) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };
    return (
        <div className="card h-100 p-0 radius-12">
            <div className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center flex-wrap gap-3 justify-content-end">
                <div className='col-md-12'>
                    <div className='card'>
                        <div className='card-body'>
                            <h6 className='mb-4 text-xl'>Add Course</h6>
                            <p className='text-neutral-500'>
                                Fill up your details and proceed next steps.
                            </p>
                            {/* Form Wizard Start */}
                            <div className='form-wizard'>
                                <form action='#' method='post'>
                                    <div className='form-wizard-header overflow-x-auto scroll-sm pb-8 my-32'>
                                        <ul className='list-unstyled form-wizard-list'>
                                            <li
                                                className={`form-wizard-list__item
                      ${[2, 3, 4].includes(currentStep) && "activated"}
                    ${currentStep === 1 && "active"} `}
                                            >
                                                <div className='form-wizard-list__line'>
                                                    <span className='count'>1</span>
                                                </div>
                                                <span className='text text-xs fw-semibold'>
                                                    Basic Information{" "}
                                                </span>
                                            </li>
                                            <li
                                                className={`form-wizard-list__item
                      ${[3, 4, 5].includes(currentStep) && "activated"}
                    ${currentStep === 2 && "active"} `}
                                            >
                                                <div className='form-wizard-list__line'>
                                                    <span className='count'>2</span>
                                                </div>
                                                <span className='text text-xs fw-semibold'>
                                                    Curriculum
                                                </span>
                                            </li>
                                            <li
                                                className={`form-wizard-list__item
                                                    ${[3, 4].includes(currentStep) && "activated"}
                                                  ${currentStep === 3 && "active"} `}
                                            >
                                                <div className='form-wizard-list__line'>
                                                    <span className='count'>3</span>
                                                </div>
                                                <span className='text text-xs fw-semibold'>Review</span>
                                            </li>
                                            <li
                                                className={`form-wizard-list__item
                      ${[4, 5].includes(currentStep) && "activated"}
                    ${currentStep === 4 && "active"} `}
                                            >
                                                <div className='form-wizard-list__line'>
                                                    <span className='count'>4</span>
                                                </div>
                                                <span className='text text-xs fw-semibold'>
                                                    Completed
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <fieldset
                                        className={`wizard-fieldset ${currentStep === 1 && "show"} `}
                                    >
                                        <h6 className='text-md text-neutral-500'>
                                            Basic Information
                                        </h6>
                                        <div className='row gy-3'>
                                            <div className='col-sm-6'>
                                                <label className='form-label'>Select Category Name*</label>
                                                <div className='position-relative'>
                                                    <select
                                                        className="form-select"
                                                        name="categoryType"
                                                    // value={formData.categoryType}
                                                    // onChange={handleChange}
                                                    >
                                                        <option value="Customer-Service">Customer Service </option>
                                                        <option value="Leadership">Leadership and Management</option>
                                                        <option value="Development Skills">Personal &
                                                            Development Skills </option>
                                                        <option value="Marketing">Sales and Marketing</option>
                                                        <option value="Administration">Administration and
                                                            Secretarial </option>
                                                        <option value="Strategy">Strategy and
                                                            Strategic Planning</option>
                                                    </select>
                                                    <div className='wizard-form-error' />
                                                </div>
                                            </div>
                                            <div className='col-sm-6'>
                                                <label className='form-label'>Course Name*</label>
                                                <div className='position-relative'>
                                                    <input
                                                        type='text'
                                                        className='form-control wizard-required'
                                                        placeholder='Enter Course Name'
                                                        required=''
                                                    />
                                                    <div className='wizard-form-error' />
                                                </div>
                                            </div>
                                            <div className='col-sm-6'>
                                                <label className='form-label'>Language*</label>
                                                <div className='position-relative'>
                                                    <input
                                                        type='text'
                                                        className='form-control wizard-required'
                                                        // placeholder='Enter Password'
                                                        required=''
                                                        value={"ENGLISH"}
                                                    />
                                                    <div className='wizard-form-error' />
                                                </div>
                                            </div>
                                            <div className='col-sm-6'>
                                                <label className='form-label'>Price*</label>
                                                <div className='position-relative'>
                                                    <input
                                                        type='number'
                                                        className='form-control wizard-required'
                                                        placeholder='Enter price'
                                                        required=''
                                                    />
                                                    <div className='wizard-form-error' />
                                                </div>
                                            </div>
                                            <div className='col-sm-6'>
                                                <label className='form-label'>Short Description*</label>
                                                <div className='position-relative'>
                                                    <textarea
                                                        type='text'
                                                        className='form-control wizard-required'
                                                        placeholder='Enter Short Description'
                                                        required=''
                                                    />
                                                    <div className='wizard-form-error' />
                                                </div>
                                            </div>
                                            <div className='col-sm-6'>
                                                <label className='form-label'>Big Description*</label>
                                                <div className='position-relative'>
                                                    <textarea
                                                        type='text'
                                                        className='form-control wizard-required'
                                                        placeholder='Enter Big Description'
                                                        required=''
                                                    />
                                                    <div className='wizard-form-error' />
                                                </div>
                                            </div>
                                            <div className='form-group text-end'>
                                                <button
                                                    onClick={nextStep}
                                                    type='button'
                                                    className='form-wizard-next-btn btn btn-primary-600 px-32'
                                                >
                                                    Next
                                                </button>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset
                                        className={`wizard-fieldset ${currentStep === 2 && "show"} `}
                                    >
                                        <h6 className='text-md text-neutral-500'>
                                            Account Information
                                        </h6>
                                        <div className='row gy-3'>
                                            <div className='col-12'>
                                                <label className='form-label'>User Name*</label>
                                                <div className='position-relative'>
                                                    <input
                                                        type='text'
                                                        className='form-control wizard-required'
                                                        placeholder='Enter User Name'
                                                        required=''
                                                    />
                                                    <div className='wizard-form-error' />
                                                </div>
                                            </div>
                                            <div className='col-sm-4'>
                                                <label className='form-label'>Card Number*</label>
                                                <div className='position-relative'>
                                                    <input
                                                        type='number'
                                                        className='form-control wizard-required'
                                                        placeholder='Enter Card Number '
                                                        required=''
                                                    />
                                                    <div className='wizard-form-error' />
                                                </div>
                                            </div>
                                            <div className='col-sm-4'>
                                                <label className='form-label'>
                                                    Card Expiration(MM/YY)*
                                                </label>
                                                <div className='position-relative'>
                                                    <input
                                                        type='number'
                                                        className='form-control wizard-required'
                                                        placeholder='Enter Card Expiration'
                                                        required=''
                                                    />
                                                    <div className='wizard-form-error' />
                                                </div>
                                            </div>
                                            <div className='col-sm-4'>
                                                <label className='form-label'>CVV Number*</label>
                                                <div className='position-relative'>
                                                    <input
                                                        type='number'
                                                        className='form-control wizard-required'
                                                        placeholder='CVV Number'
                                                        required=''
                                                    />
                                                    <div className='wizard-form-error' />
                                                </div>
                                            </div>
                                            <div className='col-12'>
                                                <label className='form-label'>Password*</label>
                                                <div className='position-relative'>
                                                    <input
                                                        type='password'
                                                        className='form-control wizard-required'
                                                        placeholder='Enter Password'
                                                        required=''
                                                    />
                                                    <div className='wizard-form-error' />
                                                </div>
                                            </div>
                                            <div className='form-group d-flex align-items-center justify-content-end gap-8'>
                                                <button
                                                    onClick={prevStep}
                                                    type='button'
                                                    className='form-wizard-previous-btn btn btn-neutral-500 border-neutral-100 px-32'
                                                >
                                                    Back
                                                </button>
                                                <button
                                                    onClick={nextStep}
                                                    type='button'
                                                    className='form-wizard-next-btn btn btn-primary-600 px-32'
                                                >
                                                    Next
                                                </button>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset
                                        className={`wizard-fieldset ${currentStep === 3 && "show"} `}
                                    >
                                        <h6 className='text-md text-neutral-500'>Review Information</h6>
                                        <div className='row gy-3'>
                                            <div className='col-sm-6'>
                                                <label className='form-label'> Name*</label>
                                                <div className='position-relative'>
                                                    <input
                                                        type='text'
                                                        className='form-control wizard-required'
                                                        placeholder='Enter Bank Name'
                                                        required=''
                                                    />
                                                    <div className='wizard-form-error' />
                                                </div>
                                            </div>
                                            <div className='col-sm-6'>
                                                <label className='form-label'>Place*</label>
                                                <div className='position-relative'>
                                                    <input
                                                        type='text'
                                                        className='form-control wizard-required'
                                                        placeholder='Enter Branch Name'
                                                        required=''
                                                    />
                                                    <div className='wizard-form-error' />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <label className="form-label">Star Rating*</label>
                                                <div className="d-flex">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <label key={star} className="me-2">
                                                            <input
                                                                type="radio"
                                                                name="rating"
                                                                value={star}
                                                                checked={rating === star}
                                                                onChange={() => setRating(star)}
                                                                required
                                                            />
                                                            {" "}⭐
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className='col-sm-6'>
                                                <label className='form-label'>Profile*</label>
                                                <div className='position-relative'>
                                                    <input
                                                        className="form-control form-control-sm"
                                                        name="categoryImage"
                                                        type="file"
                                                    // onChange={handleFileChange}
                                                    />
                                                    <div className='wizard-form-error' />
                                                </div>
                                            </div>
                                            <div className='col-sm-12'>
                                                <label className='form-label'>Feedback*</label>
                                                <div className='position-relative'>
                                                    <textarea
                                                        type='number'
                                                        className='form-control wizard-required'
                                                        placeholder='Enter your Feedback'
                                                        required=''
                                                    />
                                                    <div className='wizard-form-error' />
                                                </div>
                                            </div>
                                            <div className='form-group d-flex align-items-center justify-content-end gap-8'>
                                                <button
                                                    onClick={prevStep}
                                                    type='button'
                                                    className='form-wizard-previous-btn btn btn-neutral-500 border-neutral-100 px-32'
                                                >
                                                    Back
                                                </button>
                                                <button
                                                    onClick={nextStep}
                                                    type='button'
                                                    className='form-wizard-next-btn btn btn-primary-600 px-32'
                                                >
                                                    Publish
                                                </button>
                                            </div>
                                        </div>
                                    </fieldset>

                                    <fieldset
                                        className={`wizard-fieldset ${currentStep === 4 && "show"} `}
                                    >
                                        <div className='text-center mb-40'>
                                            <img
                                                src='assets/images/gif/success-img3.gif'
                                                alt=''
                                                className='gif-image mb-24'
                                            />
                                            <h6 className='text-md text-neutral-600'>Congratulations </h6>
                                            <p className='text-neutral-400 text-sm mb-0'>
                                                Well done! You have successfully completed.
                                            </p>
                                        </div>
                                        <div className='form-group d-flex align-items-center justify-content-end gap-8'>
                                            {/* <button
                                                onClick={prevStep}
                                                type='button'
                                                className='form-wizard-previous-btn btn btn-neutral-500 border-neutral-100 px-32'
                                            >
                                                Back
                                            </button>
                                            <button
                                                type='button'
                                                className='form-wizard-submit btn btn-primary-600 px-32'
                                            >
                                                Publish
                                            </button> */}
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                            {/* Form Wizard End */}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default CoursePageLayer