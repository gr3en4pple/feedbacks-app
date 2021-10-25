import Header from '../Header';
import SuggestionSubHeader from './SuggestionSubHeader';

const SuggestionHeader = (props) => (
  <Header OptionComponent={<SuggestionSubHeader/>}  {...props}/>
)

export default SuggestionHeader;
