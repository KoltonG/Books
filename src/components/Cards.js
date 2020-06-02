/** Imports */
import React from 'react'
import { css } from '@emotion/core'

// Components
import { Tag } from './'

/** Component - Card */
export const Card = ({ src, name, content, company }) => (
  <div
    css={css`
      background-color: var(--white);
      padding: 32px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        margin-bottom: 32px;
      }

      p {
        margin: 40px 16px;
      }

      hr {
        width: 30%;
        height: 2px;
        background-color: var(--purple);
        border: none;
        margin-bottom: 40px;
      }

      small {
        color: var(--text-grey);
      }
    `}
  >
    <img alt={name} height="140" loading="lazy" src={src} />
    <Tag>Testimonial</Tag>
    <p>{content}</p>
    <hr />
    <small>
      {name} of {company}
    </small>
  </div>
)
