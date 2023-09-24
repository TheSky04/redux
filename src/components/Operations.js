import React from 'react'
import styles from '../css/Operations.module.css'

function Operations() {
  return (
    <div className={styles.container}>
      <form>
        <h4>Operations</h4>
        <div className={styles.formGroup}>
          <label>Deposit</label>
          <input type='number'></input>
          <button type='button'>Deposit</button>
        </div>
        <div className={styles.formGroup}>
          <label>Withdraw</label>
          <input type='number'></input>
          <button type='button'>Withdraw</button>
        </div>
        <div className={styles.formGroupPurpose}>
          <label>Request Loan</label>
          <input type='number'></input>
          <input type='text' placeholder='request purpose'></input>
          <button type='button'>Request Loan</button>
        </div>
        <div className={styles.formGroup}>
          <label>Pay Loan</label>
          <input type='number' disabled placeholder='500$'></input>
          <button type='button'>Pay Loan</button>
        </div>
        <p>Loan Purpose: Buy a car</p>
      </form>
    </div>
  )
}

export default Operations
