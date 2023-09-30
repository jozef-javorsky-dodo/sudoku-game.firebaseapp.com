import { Component } from "@angular/core";

@Component({
  selector: "app-html-body-main",
  templateUrl: "./html-body-main.component.html",
  styleUrls: ["./html-body-main.component.css"]
})

export class HtmlBodyMainComponent {

  sub_cubes_col_func(): void {
    let sub00: any = document.querySelectorAll(<string>".SubCube00");
    let sub01: any = document.querySelectorAll(<string>".SubCube01");
    let sub02: any = document.querySelectorAll(<string>".SubCube02");
    let sub10: any = document.querySelectorAll(<string>".SubCube10");
    let sub11: any = document.querySelectorAll(<string>".SubCube11");
    let sub12: any = document.querySelectorAll(<string>".SubCube12");
    let sub20: any = document.querySelectorAll(<string>".SubCube20");
    let sub21: any = document.querySelectorAll(<string>".SubCube21");
    let sub22: any = document.querySelectorAll(<string>".SubCube22");

    [...sub00, ...sub11, ...sub22].forEach(
      c => c.style.borderColor = <string>"rgb(244, 122, 122)"
    );
    [...sub01, ...sub12, ...sub20].forEach(
      c => c.style.borderColor = <string>"rgb(122, 244, 122)"
    );
    [...sub02, ...sub10, ...sub21].forEach(
      c => c.style.borderColor = <string>"rgb(122, 122, 244)"
    );
  };

  cols_col_func(): void {
    let col0: any = document.querySelectorAll(<string>".Col0");
    let col1: any = document.querySelectorAll(<string>".Col1");
    let col2: any = document.querySelectorAll(<string>".Col2");
    let col3: any = document.querySelectorAll(<string>".Col3");
    let col4: any = document.querySelectorAll(<string>".Col4");
    let col5: any = document.querySelectorAll(<string>".Col5");
    let col6: any = document.querySelectorAll(<string>".Col6");
    let col7: any = document.querySelectorAll(<string>".Col7");
    let col8: any = document.querySelectorAll(<string>".Col8");

    [...col0, ...col3, ...col6].forEach(
      c => c.style.borderColor = <string>"rgb(244, 122, 122)"
    );
    [...col1, ...col4, ...col7].forEach(
      c => c.style.borderColor = <string>"rgb(122, 244, 122)"
    );
    [...col2, ...col5, ...col8].forEach(
      c => c.style.borderColor = <string>"rgb(122, 122, 244)"
    );
  };

  rows_col_func(): void {
    let row0: any = document.querySelectorAll(<string>".Row0");
    let row1: any = document.querySelectorAll(<string>".Row1");
    let row2: any = document.querySelectorAll(<string>".Row2");
    let row3: any = document.querySelectorAll(<string>".Row3");
    let row4: any = document.querySelectorAll(<string>".Row4");
    let row5: any = document.querySelectorAll(<string>".Row5");
    let row6: any = document.querySelectorAll(<string>".Row6");
    let row7: any = document.querySelectorAll(<string>".Row7");
    let row8: any = document.querySelectorAll(<string>".Row8");

    [...row0, ...row3, ...row6].forEach(
      c => c.style.borderColor = <string>"rgb(244, 122, 122)"
    );
    [...row1, ...row4, ...row7].forEach(
      c => c.style.borderColor = <string>"rgb(122, 244, 122)"
    );
    [...row2, ...row5, ...row8].forEach(
      c => c.style.borderColor = <string>"rgb(122, 122, 244)"
    );
  };

  null_col_func(): void {
    let tds: any = document.querySelectorAll(<string>"td");

    [...tds].forEach(t => t.style.borderColor = <string>"rgb(0, 0, 0)");
  };

  generate_bttn_func(): void {
    let num_arr: number[] = [];
    let tds: any = document.querySelectorAll(<string>"td");
    let repe = () => {
      for (let xy: number = <number>27; xy <= <number>80; xy++) {
        let subc_arr: number[] | string[] | any[] = [];
        let col_arr: number[] | string[] | any[] = [];
        let row_arr: number[] | string[] | any[] = [];
        let _subc_c: any = <string>'';
        let _col_c: any = <string>'';
        let _row_c: any = <string>'';

        _subc_c = document.querySelectorAll(
          <string>'.' + String(tds[xy].getAttribute(<string>"class")).split(<string>' ')[<number>0]
        );
        _col_c = document.querySelectorAll(
          <string>'.' + String(tds[xy].getAttribute(<string>"class")).split(<string>' ')[<number>1]
        );
        _row_c = document.querySelectorAll(
          <string>'.' + String(tds[xy].getAttribute(<string>"class")).split(<string>' ')[<number>2]
        );
        for (let x: number = <number>0; x <= <number>8; x++) {
          subc_arr.push(Number(_subc_c[x].innerHTML));
          col_arr.push(Number(_col_c[x].innerHTML));
          row_arr.push(Number(_row_c[x].innerHTML));
        };
        for (let pos_new_val__: number = <number>1; pos_new_val__ <= <number>9; pos_new_val__++) {
          if (
            (subc_arr.includes(pos_new_val__) === <boolean>false) &&
            (col_arr.includes(pos_new_val__) === <boolean>false) &&
            (row_arr.includes(pos_new_val__) === <boolean>false)
          ) {
            tds[xy].innerHTML = String(Number(pos_new_val__));
            tds[xy].style.color = <string>"rgb(244, 0, 0)";
            break;
          } else { continue; };
        };
      };
    };
    let generate_bttn: any = document.querySelector(<string>"#generate-bttn");
    let solve_bttn: any = document.querySelector(<string>"#solve-bttn");

    for (let xy: number = <number>0; xy <= <number>80; xy++) {
      tds[xy].innerHTML = String('0');
      tds[xy].style.color = <string>"rgb(122, 122, 122)";
    };
    while (num_arr.length < <number>9) {
      let pos_new_val: number = Math.floor(Math.random() * <number>9) + <number>1;

      if (num_arr.includes(pos_new_val) === <boolean>false) num_arr.push(pos_new_val);
    };
    tds[<number>0].innerHTML = String(num_arr[<number>0]);
    tds[<number>1].innerHTML = String(num_arr[<number>1]);
    tds[<number>2].innerHTML = String(num_arr[<number>2]);
    tds[<number>3].innerHTML = String(num_arr[<number>3]);
    tds[<number>4].innerHTML = String(num_arr[<number>4]);
    tds[<number>5].innerHTML = String(num_arr[<number>5]);
    tds[<number>6].innerHTML = String(num_arr[<number>6]);
    tds[<number>7].innerHTML = String(num_arr[<number>7]);
    tds[<number>8].innerHTML = String(num_arr[<number>8]);
    tds[<number>9].innerHTML = String(num_arr[<number>6]);
    tds[<number>10].innerHTML = String(num_arr[<number>7]);
    tds[<number>11].innerHTML = String(num_arr[<number>8]);
    tds[<number>12].innerHTML = String(num_arr[<number>0]);
    tds[<number>13].innerHTML = String(num_arr[<number>1]);
    tds[<number>14].innerHTML = String(num_arr[<number>2]);
    tds[<number>15].innerHTML = String(num_arr[<number>3]);
    tds[<number>16].innerHTML = String(num_arr[<number>4]);
    tds[<number>17].innerHTML = String(num_arr[<number>5]);
    tds[<number>18].innerHTML = String(num_arr[<number>3]);
    tds[<number>19].innerHTML = String(num_arr[<number>4]);
    tds[<number>20].innerHTML = String(num_arr[<number>5]);
    tds[<number>21].innerHTML = String(num_arr[<number>6]);
    tds[<number>22].innerHTML = String(num_arr[<number>7]);
    tds[<number>23].innerHTML = String(num_arr[<number>8]);
    tds[<number>24].innerHTML = String(num_arr[<number>0]);
    tds[<number>25].innerHTML = String(num_arr[<number>1]);
    tds[<number>26].innerHTML = String(num_arr[<number>2]);
    for (let xy: number = <number>0; xy <= <number>26; xy++)
      tds[xy].style.color = <string>"rgb(0, 0, 0)";
    for (let repe_iter: number = <number>0; repe_iter <= <number>9; repe_iter++)
      repe();
    for (let xy: number = <number>27; xy <= <number>80; xy++)
      tds[xy].style.color = <string>"rgb(0, 0, 0)";
    for (let xy: number = <number>0; xy <= <number>80; xy++)
      if (tds[xy].innerHTML === String('0'))
        this.generate_bttn_func();
    generate_bttn.style.visibility = <string>"hidden";
    solve_bttn.style.visibility = <string>"visible";
    for (let xy: number = <number>0; xy <= <number>80; xy++)
      tds[xy].style.color = <string>"rgb(0, 0, 0)";
    for (let iter_: number = <number>0; iter_ <= <number>9; iter_++)
      tds[Number(Math.floor(Math.random() * <number>81))].style.color = <string>"rgb(122, 122, 122)";
  }

  solve_bttn_func(): void {
    let generate_bttn: any = document.querySelector(<string>"#generate-bttn");
    let solve_bttn: any = document.querySelector(<string>"#solve-bttn");
    let tds: any = document.querySelectorAll(<string>"td");

    generate_bttn.style.visibility = <string>"visible";
    solve_bttn.style.visibility = <string>"hidden";
    [...tds].forEach(t => {
      if (t.style.color === <string>"rgb(122, 122, 122)") t.style.color = <string>"rgb(244, 244, 244)";
    });
  };

}