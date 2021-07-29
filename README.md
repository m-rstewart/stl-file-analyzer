# STL File Analyzer

This STL file parser will anazlye STL files (ASCII only) and output the following metrics:

- Number of triangles in the file
- Total surface area of the triangles

## Running the Parser

This parser is built in NodeJS. It requires a node version of 14 or above. Before running the parser, first install the node modules:

```
npm i
```

To run the parser, run the following command:

```
node main.js <path_to_your_file>
```

Tests can be run via

```
npm run test
```

For convenience, two example files can be found in the `stl-files` directory.

## Design Decisions

There are two classes in this codebase: `STLFileAnalyzer` and `Triangle`.

`STLFileAnalyzer` is responsible for taking in a file to parse, and running analyzation on that file via a `stream`.

`Triangle` is responsible for keeping track of total triangles during file parsing and providing a method to allow an instance of `Triangle` to calculate its own surface area.

The goal was to maximize separation of concerns and encapsulation. `STLFileAnalyzer` is only concerned with the act of parsing a stream and creating new `Triangle`'s. `Triangle` attempts to handle everything related to triangles, from calculating the individual surface area of a triangle to calculating the total surface area of all known triangles.

Internally, a `Triangle` is represented as a 2d array: the outer triangle array holds three verticies, each of which is an array of three points(integers).

## Possible Improvements

In order to allow for very large files to be analyzed efficiently, I opted for using a stream to read the file to avoid loading the entire file into memory. Parsing would be very memory ineffiecient if a file that contained millions of triangles needed to be loaded into memory first before analyzation could begin.

The main area I could see improving upon would be the line parsing itself. Currently, it checks if each line includes the word "vertex." From there, it then conducts a series of iterative transformations and results in a time complexity that, to me, seems sub-optimal.

In addition, there are probably ways to improve the handling of the asynchronous nature of the stream itself in `STLFileAnalyzer`.
