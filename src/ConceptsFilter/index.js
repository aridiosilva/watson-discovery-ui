/**
 * Copyright 2017 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License'); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

import PropTypes from 'prop-types';
import FilterContainer from '../FilterBase/FilterContainer';

/**
 * ConceptsFilter - A container component for Concept objects.
 */
class ConceptsFilter extends FilterContainer {
  constructor(...props) {
    super(...props);

    this.state = {
       selectedConcepts: this.props.selectedConcepts
    };
  }

  getSelectedCollection() {
    const { selectedConcepts } = this.props;
    return selectedConcepts;
  }

  getCollection() {
    const { concepts } = this.props;
    return concepts;
  }

  getContainerTitle() {
    return "Top Concepts";
  }  
};

// export so we are visible to parent
module.exports = ConceptsFilter;