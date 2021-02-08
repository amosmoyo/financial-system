import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mouseOver

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

	save(form: NgForm) {
		if (form.invalid) {
			return;
		}

		const user = {
			email: form.value.email,
			password: form.value.password
		};

		console.log(form.value);

    this.router.navigate(['/admin/home'])

		// this.router.navigate(['/admin/panel/home']);
	}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	cancel() {
		this.router.navigate(['/']);
	}

  /* logClick(): void {
   this.router.navigateByUrl('/admin/home')
  } */

}
