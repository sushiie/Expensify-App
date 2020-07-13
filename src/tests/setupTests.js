import Enzymme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

require('dotenv').config({ path: '.env.test' });

Enzymme.configure({
    adapter: new Adapter()
})