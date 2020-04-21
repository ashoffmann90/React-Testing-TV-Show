import React from "react";
import { render, waitFor} from "@testing-library/react";
import App from "./App";
import {fetchShow as mockFetchShow} from './api/fetchShow'
import userEvent from '@testing-library/user-event'

test('App renders without errors', () => {
    render(<App/>)
})

jest.mock('./api/fetchShow')
console.log(mockFetchShow)

const showData = {
  id: 2993,
  name: "Stranger Things",
  runtime: 60,
  image: {
    medium:
      "http://static.tvmaze.com/uploads/images/medium_portrait/200501942.jpg",
    original:
      "http://static.tvmaze.com/uploads/images/original_untouched200/501942.jpg",
  },
  summary:
    "<p>A love letter to the '80s classics that captivated ageneration, <b>Stranger Things</b> is set in 1983 Indiana,where a young boy vanishes into thin air. As friends, familyand local police search for answers, they are drawn into anextraordinary mystery involving top-secret governmentexperiments, terrifying supernatural forces and one verystrange little girl.</p>",
  _embedded: {
    episodes: [
      {
        id: 553946,
        name: "Chapter One: The Vanishing of Will Byers",
        season: 1,
        number: 1,
        runtime: 60,
        image: {
          medium:
            "http://static.tvmaze.com/uploads/imagesmedium_landscape/67/168918.jpg",
          original:
            "http://static.tvmaze.com/uploads/imagesoriginal_untouched/67/168918.jpg",
        },
      },
      {
        id: 909340,
        name: "Chapter One: MADMAX",
        season: 2,
        number: 1,
        runtime: 60,
        image: {
          medium:
            "http://static.tvmaze.com/uploads/imagesmedium_landscape/132/331976.jpg",
          original:
            "http://static.tvmaze.com/uploads/imagesoriginal_untouched/132/331976.jpg",
        }
      }
    ]
  }
}

test('renders mission data when a season is selected', async () => {
    mockFetchShow.mockResolvedValueOnce(showData)
  
    const {getByText, getByTestId, queryAllByTestId} = render(<App />)
    // debug()
    const dropdown = getByText(/select a season/i)
    userEvent.click(dropdown)
    userEvent.click(getByTestId(/selectOne/i))
    // debug()
  
    await waitFor(() => expect(queryAllByTestId(/episodes/i)).toHaveLength(2))
    // debug()
    
  })
