import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const Consonants = () => {
  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>IPA</TableCell>
          <TableCell>Inglês</TableCell>
          <TableCell>Português</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>b</TableCell>
          <TableCell>
            <b>b</b>uy, <b>c</b>ab
          </TableCell>
          <TableCell>
            <b>b</b>eiço, âm<b>b</b>ar, so<b>b</b>, ca<b>b</b>eça, so<b>b</b>
            re
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>d</TableCell>
          <TableCell>
            <b>d</b>ye, ca<b>d</b>, la<b>dd</b>er
          </TableCell>
          <TableCell>
            ce<b>d</b>o, i<b>d</b>ade, <b>d</b>edo, len<b>d</b>a
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>dj</TableCell>
          <TableCell>
            <b>d</b>ew
          </TableCell>
          <TableCell>
            <b>d</b>ia
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>dʒ</TableCell>
          <TableCell>
            <b>g</b>iant, ba<b>dg</b>e
          </TableCell>
          <TableCell>
            <b>d</b>igo, an<b>d</b>e, bal<b>d</b>e
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>ð</TableCell>
          <TableCell>
            <b>th</b>y, brea<b>th</b>e, fa<b>th</b>er
          </TableCell>
          <TableCell>
            Voiced TH
            <br />
            <b>~~~</b> como o d, mas com a língua encostando nos dentes de cima,
            ou, se aproximante, sem encostar no céu da boca (ficando entre D e
            Z)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>f</TableCell>
          <TableCell>
            <b>f</b>an, lea<b>f</b>
          </TableCell>
          <TableCell>
            <b>f</b>ado, ca<b>f</b>é
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>ɡ</TableCell>
          <TableCell>
            <b>g</b>uy, ba<b>g</b>
          </TableCell>
          <TableCell>
            <b>g</b>ato, si<b>g</b>no, bin<b>g</b>o, <b>gu</b>erra
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>h</TableCell>
          <TableCell>
            <b>h</b>igh, a<b>h</b>ead
          </TableCell>
          <TableCell>
            ma<b>rr</b>eta
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>hw</TableCell>
          <TableCell>
            <b>wh</b>ine <br />
            (Na maioria dos sotaques não é mais usado.{" "}
            <a
              href="https://en.wikipedia.org/wiki/Pronunciation_of_English_%E2%9F%A8wh%E2%9F%A9#Wine.E2.80.93whine_merger"
              target="_blank"
            >
              Referência
            </a>
            )
          </TableCell>
          <TableCell>
            a<b>rr</b>uar
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>j</TableCell>
          <TableCell>
            <b>y</b>es, hallelu<b>j</b>ah
          </TableCell>
          <TableCell>
            sa<b>i</b>a, pa<b>i</b>s
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>k</TableCell>
          <TableCell>
            s<b>k</b>y, <b>c</b>ra<b>ck</b>
          </TableCell>
          <TableCell>
            <b>c</b>or, di<b>c</b>a, <b>qu</b>ente, <b>k</b>iwi
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>l</TableCell>
          <TableCell>
            <b>l</b>ie, s<b>l</b>y, ga<b>l</b>
          </TableCell>
          <TableCell>
            <b>l</b>ua, a<b>l</b>ô
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>lj</TableCell>
          <TableCell>
            <b>l</b>ute
          </TableCell>
          <TableCell>
            <b>Li</b>a, <b>lh</b>a
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>m</TableCell>
          <TableCell>
            <b>m</b>y, s<b>m</b>ile, ca<b>m</b>
          </TableCell>
          <TableCell>
            <b>m</b>ês, so<b>m</b>o
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>n</TableCell>
          <TableCell>
            <b>n</b>igh, s<b>n</b>ide, ca<b>n</b>
          </TableCell>
          <TableCell>
            <b>n</b>ão, so<b>n</b>o
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>nj</TableCell>
          <TableCell>
            <b>n</b>ew
          </TableCell>
          <TableCell>
            hér<b>ni</b>a, Bós<b>ni</b>a
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>ŋ</TableCell>
          <TableCell>
            sa<b>ng</b>, si<b>n</b>k, si<b>ng</b>er
          </TableCell>
          <TableCell>???????</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>p</TableCell>
          <TableCell>
            <b>p</b>ie, s<b>p</b>y, ca<b>p</b>
          </TableCell>
          <TableCell>
            <b>p</b>ó, so<b>p</b>a, a<b>p</b>to
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>ɹ</TableCell>
          <TableCell>
            <b>r</b>ye, t<b>r</b>y, ve<b>r</b>y
          </TableCell>
          <TableCell>
            canta<b>r</b>, abri<b>r</b> (sotaque caipira)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>s</TableCell>
          <TableCell>
            <b>s</b>igh, ma<b>ss</b>
          </TableCell>
          <TableCell>
            <b>s</b>aco, i<b>ss</b>o, bra<b>ç</b>o, má<b>x</b>imo
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>sj</TableCell>
          <TableCell>
            con<b>s</b>ume
          </TableCell>
          <TableCell>
            <b>ci</b>úme, ma<b>ci</b>eira
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>ʃ</TableCell>
          <TableCell>
            <b>sh</b>y, ca<b>sh</b>, emo<b>t</b>ion
          </TableCell>
          <TableCell>
            <b>ch</b>ave, a<b>ch</b>ar, <b>x</b>arope, bai<b>x</b>o, su
            <b>sh</b>i
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>t</TableCell>
          <TableCell>
            <b>t</b>ie, s<b>t</b>y, ca<b>t</b>, la<b>tt</b>er
          </TableCell>
          <TableCell>
            <b>t</b>empo, á<b>t</b>omo
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>tj</TableCell>
          <TableCell>
            <b>t</b>une
          </TableCell>
          <TableCell>
            sí<b>ti</b>o
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>tʃ</TableCell>
          <TableCell>
            <b>Ch</b>ina, ca<b>tch</b>
          </TableCell>
          <TableCell>
            <b>tch</b>au, a<b>tch</b>im
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>θ</TableCell>
          <TableCell>
            Unvoiced TH
            <br />
            <b>th</b>igh, ma<b>th</b>
          </TableCell>
          <TableCell>
            <b>~~~</b> semelhante ao s pronunciado com a ponta da língua na
            borda dos dentes superiores (como as pessoas que ceceiam)
            <br />
            <br />
            <b>f</b>im, <b>f</b>ato (F mudo)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>θj</TableCell>
          <TableCell>
            en<b>th</b>use
          </TableCell>
          <TableCell>
            <b>~~~</b> a<b>fi</b>ada, epitá<b>fi</b>o
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>v</TableCell>
          <TableCell>
            <b>v</b>ine, lea<b>v</b>e
          </TableCell>
          <TableCell>
            <b>v</b>ela, li<b>v</b>ro
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>w</TableCell>
          <TableCell>
            <b>w</b>ine, s<b>w</b>ine
          </TableCell>
          <TableCell>
            ma<b>l</b>, freq<b>u</b>ente, q<b>u</b>ã<b>o</b>, ma<b>u</b>, Ca
            <b>u</b>ã
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>z</TableCell>
          <TableCell>
            <b>z</b>oo, ha<b>s</b>
          </TableCell>
          <TableCell>
            ca<b>s</b>a, o<b>s</b> amigos, do<b>z</b>e, e<b>x</b>istir
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>zj</TableCell>
          <TableCell>
            <b>Z</b>eus
          </TableCell>
          <TableCell>
            bú<b>zi</b>o, dú<b>zi</b>a
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>ʒ</TableCell>
          <TableCell>
            plea<b>s</b>ure, bei<b>g</b>e
          </TableCell>
          <TableCell>
            <b>j</b>á, <b>g</b>ente
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
export default Consonants;
