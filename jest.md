```js
import {screen, render, waitFor} from '@testing-library-react';
import user from '@testing-library/user-event';
import App from './App';

describe('test App component', ()=>{

    it('shows 6 products by default', async()=>{
        render(<App />)

        const titles = await screen.findAllByRole('heading');
        expect(titles).toHaveLength(6)
    })

    it('clicking on the button loads 6 more products', async()=>{
        render(<App />)

        const button = await screen.findByRole('button', {
            name: /load more/i
        });

        user.click(button);

        await waitFor(async ()=>{
            const titles = await screen.findByRole('heading')    
            expect(titles).toHaveLength(12)
        })
        screen
    })
})

```