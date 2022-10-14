import type { NextPage } from 'next'
import { useState, ChangeEvent } from 'react'
import styles from '../styles/Home.module.css'

const CashReturn = () => {
    let deno: number[] = [1, 5, 10, 25]
    let n = deno.length;
    var ans: number[] = []
    const [coinInput, setCoinInput] = useState("")
    const handleCal = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value !== "") {
            setCoinInput(e.target.value)
        } else {
            setCoinInput("0")
        }
    }
    const findMin = (V: number) => {
        for (let i = n - 1; i >= 0; i--) {
            while (V >= deno[i]) {
                V -= deno[i];
                ans.push(deno[i])
            }
        }


    }
    return (
        <div className={styles.container}>
            <div>Cash Return</div>
            <div>
                <div>Input your coin
                    <input type="number" onChange={handleCal}></input>
                </div>
            </div>
            <div>
                {`
                ${ans.map((item, index) => {

                }
                )}`}
            </div>

        </div>
    )
}

export default CashReturn;
