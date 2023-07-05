import React, {useEffect, useState} from 'react'
import Logo from "../Header/Logo/Logo";

const CurrencyChallenge = () => {
    const [currency, setCurrency] = useState(100);
    const [toCurrency, setToCurrency] = useState("USD");
    const [fromCurrency, setFromCurrency] = useState("EUR");
    const [isLoading, setIsLoading] = useState(false)
    const [showCurrency, setShowCurrency] = useState('');

    // const baseUrl = `https://api.frankfurter.app/latest`

    useEffect(() => {
        // const controller = new AbortController();
        try {
            async function fetchAPIRequest() {
                if (!currency) return
                setIsLoading(true)
                const data = await fetch(`https://api.frankfurter.app/latest?amount=${currency}&from=${fromCurrency}&to=${toCurrency}`);
                if (!data.ok) {
                    throw new Error("Failed to fetch the API data")
                }
                const currencyResponse = await data.json()
                setShowCurrency(currencyResponse.rates[toCurrency])
                setIsLoading(false)
            }
            if(toCurrency === fromCurrency) return setShowCurrency(currency)
                fetchAPIRequest();

            return (() => {
                // controller.abort();
            })
        } catch (error) {
            console.log(error)
        }
    }, [currency, fromCurrency, toCurrency]);

    const handleToCurrency = (e) => {
        setToCurrency(e.target.value)
    }
    const handleFromCurrency= (e) => {
        setFromCurrency(e.target.value)
    }
    return (
        <div>
            <input type="search"  value={currency} onChange={(e) => setCurrency(Number(e.target.value))}/>
            <select value={fromCurrency} onChange={handleFromCurrency} disabled={isLoading}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
            <select value={toCurrency} onChange={handleToCurrency} disabled={isLoading }>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
            {showCurrency} {toCurrency}
        </div>
    )
}

export default CurrencyChallenge
