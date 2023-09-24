import React from 'react'
import styles from '../css/CreateCustomer.module.css'

function CreateCustomer() {
  return (
    <div className={styles.container}>
      <form>
        <h4>Create Customer</h4>
        <div className={styles.formGroup}>
          <label>Full Name</label>
          <input type='text'></input>
        </div>
        <div className={styles.formGroup}>
          <label>National ID</label>
          <input type='text'></input>
        </div>
        <button type='button'>Create Customer</button>
      </form>
    </div>
  )
}

export default CreateCustomer
