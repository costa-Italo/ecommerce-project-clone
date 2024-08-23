import React from 'react'

const SizeOptions = () => {
    return (
        <div> 
            
            <div className="flex overflow-hidden gap-10 justify-center px-4 py-3 text-sm bg-white border border-gray-300 border-solid max-w=[348px] text-zinc-400">
            <label htmlFor="">Tamanhos</label>
                <select name="" id="">
                    <option value="" className=''></option>
                    <option value="">P</option>
                    <option value="">M</option>
                    <option value="">G</option>
                    <option value="">GG</option>
                    <option value="">XG</option>
                </select>
            </div>
            
        </div>
    )
}

export default SizeOptions
