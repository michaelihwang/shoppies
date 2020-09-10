import React from 'react';

import TableHeader from './TableHeader';
import TableRow from './TableRow';

import { Movies } from '../../utils/constants';

const headers = ['Title', 'Year', 'Status']

interface TableProps {
  searchResults: Array<Movies>;
  nominations: Array<Movies>;
  onBtnClick: (newItem: Movies) => void;
}

export default function Table({ searchResults, nominations, onBtnClick }: TableProps) {
  return (
    <div className="flex-1 flex flex-col">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className=" overflow-hidden border border-dark">
          <table className="min-w-full divide-y divide-dark">
            <TableHeader headers={headers} />
            <tbody className="bg-white divide-y divide-gray-200">
              {searchResults.map(movie => (
                <TableRow
                  key={movie.imdbID}
                  title={movie.Title}
                  year={movie.Year}
                  nominated={nominations.some(nom => nom.imdbID === movie.imdbID)}
                  onBtnClick={() => onBtnClick(movie)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}