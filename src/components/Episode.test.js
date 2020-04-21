import React from "react";
import { render} from "@testing-library/react";
import Episodes from "./Episodes";

test('Episodes renders without errors', () => {
    render(<Episodes episodes={[]}/>)
})


const showData = [
    {
      id: 553946,
      url: 'http://www.tvmaze.com/episodes553946stranger-things-1x01-chapter-one-the-vanising-of-will-byers',
      name: 'Chapter One: The Vanishing of WillByers',
      season: 1,
      number: 1,
      airdate: '2016-07-15',
      airtime: '',
      airstamp: '2016-07-15T12:00:00+00:00',
      runtime: 60,
      image: {
        medium: 'http://static.tvmaze.comuploads/images/medium_landscape/67168918.jpg',
        original: 'http://static.tvmaze.comuploads/images/original_untouched/67168918.jpg'
      },
      summary: '<p>A young boy mysteriouslydisappears, and his panicked motherdemands that the police find him.Meanwhile, the boy\'s friends conducttheir own search, and meet a mysteriousgirl in the forest.</p>',
      _links: {
        self: {
          href: 'http://api.tvmaze.com/episodes553946'
        }
      }
    },
    {
      id: 578663,
      url: 'http://www.tvmaze.com/episodes578663stranger-things-1x02-chapter-two-the-weird-on-maple-street',
      name: 'Chapter Two: The Weirdo on MapleStreet',
      season: 1,
      number: 2,
      airdate: '2016-07-15',
      airtime: '',
      airstamp: '2016-07-15T12:00:00+00:00',
      runtime: 60,
      image: {
        medium: 'http://static.tvmaze.comuploads/images/medium_landscape/72181376.jpg',
        original: 'http://static.tvmaze.comuploads/images/original_untouched/72181376.jpg'
      },
      summary: '<p>While the search for themissing Will continues, Joyce tells Jimabout a call she apparently received fromher son. Meanwhile, Jane warns Mike thatthere are bad people after her, and herealizes that she knows what happened toWill.</p>',
      _links: {
        self: {
          href: 'http://api.tvmaze.com/episodes578663'
        }
      }
    }
]

test('Renders episodes after API call', () => {
    const {rerender, queryAllByTestId} = render(<Episodes episodes={[]} />)

    expect(queryAllByTestId(/episodes/i)).toHaveLength(0)
    rerender(<Episodes episodes={showData} />)
    expect(queryAllByTestId(/episodes/i)).toHaveLength(2)
})