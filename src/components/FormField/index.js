import React from 'react';

function FormField({ label, type, name, value, onChange }) {
    return (
        <div>
            <label>
                {label}:

          {(type === 'textarea') ? (
                    <textarea
                        value={value}
                        name={name}
                        onChange={onChange}
                    />
                ) : (
                        <input
                            type={type}
                            value={value}
                            name={name}
                            onChange={onChange}
                        />
                    )}


            </label>
        </div>
    )
}

export default FormField;