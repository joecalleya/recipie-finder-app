import React from 'react';
import styles './RecipieCard.module.scss';
import jsonResponse from './data/api-data.js';

export const RecipieCard = () => {
    return (
        <div>
            {jsonResponse};
        </div>
    )
}
