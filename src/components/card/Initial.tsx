import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import ShowCategory from '../category/ShowCategory';
import useStyles from './Initial.css';

const Initial = (props: any) => {
  const classes = useStyles();
  const { cards, categories, currentCategory, user } = props;
  return (
    <div className={classes.container}>
      {currentCategory && (
        <Typography variant="h4" component="h4">
          {currentCategory.namePt} {`(${cards.length})`}
        </Typography>
      )}

      {categories && categories.length > 0 && (
        <>
          {user && user.admin && (
            <Link to={`/category-create`}>
              <Button color="primary" variant="contained">
                Adicionar Categoria
              </Button>
            </Link>
          )}

          <div className={classes.categoriesContainer}>
            {categories.map((category: any) => (
              <ShowCategory category={category} user={user} />
            ))}
          </div>
        </>
      )}

      {currentCategory && (
        <>
          <div>
            {cards.length > 0 && (
              <Link to={`/category/${currentCategory.id}/presentation`}>
                <Button color="primary" variant="contained">
                  Apresentação
                </Button>
              </Link>
            )}

            {cards.length > 0 && (
              <Link to={`/category/${currentCategory.id}/game`}>
                <Button color="primary" variant="contained">
                  Jogar
                </Button>
              </Link>
            )}

            {user && user.admin && (
              <Link to={`/card-create/${currentCategory.id}`}>
                <Button variant="contained">Adicionar</Button>
              </Link>
            )}

            {user && user.admin && cards.length > 0 && (
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>English</TableCell>
                    <TableCell>Portuguese</TableCell>
                    <TableCell>Chinese (Trad.)</TableCell>
                    <TableCell>Chinese (Simp.)</TableCell>
                    <TableCell>Pinyin</TableCell>
                    <TableCell>Italian</TableCell>
                    <TableCell>French</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cards.map((card: any) => (
                    <TableRow key={card.id}>
                      <TableCell component="th" scope="row">
                        {card.nameEn}
                      </TableCell>
                      <TableCell>{card.namePt}</TableCell>
                      <TableCell>{card.nameCht}</TableCell>
                      <TableCell>{card.nameChs}</TableCell>
                      <TableCell>{card.pinyin}</TableCell>
                      <TableCell>{card.nameIt}</TableCell>
                      <TableCell>{card.nameFr}</TableCell>
                      <TableCell>
                        <Link to={`/card-update/${card.id}`}>
                          <Typography>Edit</Typography>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Initial;