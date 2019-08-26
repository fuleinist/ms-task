import React from 'react';
import { connect } from 'react-redux';
import * as Table from 'reactabular-table';
import MSSorter from 'components/Ui/MSSorter/MSSorter';
import {
  initSample, sortSample, resetSample, setSorting,
} from 'redux/actions/SampleAction';
import { countries, setSort } from 'components/Ui/MyTable/MyTable.utils';

class MyTable extends React.Component {
  componentWillMount() {
    // call init if we can
    this.props.init();
    console.log(this.props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.sorting !== prevProps.sorting) {
      console.log('sorting...');
      this.props.sort(this.props.rows, this.props.sorting);
    }
  }

  render() {
    const headerformat = (label) => {
      const sortObj = this.props.sorting ? (this.props.sorting).find((e) => e.name === label) : {};
      const status = sortObj ? sortObj.status : null;
      return (
        <div>
          {label}
          <MSSorter sort={status} />
        </div>
      );
    };
    const columns = [
      {
        property: 'id',
        header: {
          label: 'ID',
          formatters: [
            headerformat,
          ],
          transforms: [
            (label) => ({
              onClick: () => this.props.updateSort(label, this.props.sorting),
            }),
          ],
        },
      },
      {
        property: 'name',
        header: {
          label: 'Name',
          transforms: [
            (label) => ({
              onClick: () => this.props.updateSort(label, this.props.sorting),
            }),
          ],
          formatters: [
            headerformat,
          ],
        },
      },
      {
        property: 'tools',
        header: {
          label: 'Active',
          name: 'tools',
          transforms: [
            (name) => ({
              onClick: () => this.props.updateSort(name, this.props.sorting),
            }),
          ],
          formatters: [
            headerformat,
          ],
        },
        cell: {
          formatters: [
            (tools) => (tools.hammer ? 'Hammertime' : 'nope'),
          ],
        },
      },
      {
        property: 'country',
        header: {
          label: 'Country',
          transforms: [
            (label) => ({
              onClick: () => this.props.updateSort(label, this.props.sorting),
            }),
          ],
          formatters: [
            headerformat,
          ],
        },
        cell: {
          formatters: [
            (country) => countries[country],
          ],
        },
      },
    ];
    return this.props.rows ? (
      <Table.Provider
        className="table table-striped table-bordered"
        columns={columns}
      >
        <Table.Header />
        <Table.Body rows={this.props.rows} rowKey="id" />
      </Table.Provider>
    ) : null;
  }
}

const mapDispatchToProps = (dispatch) => ({
  // initSample(values) {
  //   console.log('MyTable.js: ?.initSample called => ', 'values=', values);
  //   return postJSON(getRoutePath('api/test'), {
  //     ...values,
  //   }).then((resp) => ((resp && resp.response) ? resp.response : null), (err) => err || null);
  // },
  init() {
    return dispatch(initSample());
  },
  sort(rows, sorting) {
    return dispatch(sortSample(rows, sorting));
  },
  reset() {
    return dispatch(resetSample());
  },
  updateSort(e, sorting) {
    const updatedSorting = setSort(e, sorting);
    return dispatch(setSorting(updatedSorting));
  },
});

const mapStateToProps = (storeState) => ({
  rows: storeState.sample.rows,
  sorting: storeState.sample.sorting,
});

export default connect(
  // store state to props
  mapStateToProps,
  mapDispatchToProps,
)(MyTable);
