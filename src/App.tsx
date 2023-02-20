import Navbar from './components/Navbar.jsx';
import { createRef } from 'react';

function App() {
  const ref = createRef<HTMLInputElement>()
	return (
		<div className='drawer'>
			<input ref={ref} id='my-drawer' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content'>
				<Navbar menuRef={ref} />
			</div>
			<div className='drawer-side'>
				<label htmlFor='my-drawer' className='drawer-overlay'></label>
				<ul className='menu p-4 w-80 bg-base-100 text-base-content'>
					<li>
						<a>Sidebar Item 1</a>
					</li>
					<li>
						<a>Sidebar Item 2</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default App;
