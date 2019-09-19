import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {

  custom: boolean = false;

  data = [
    {
      title: 'Card One',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eum ab maxime dicta dolore adipisci corporis quibusdam corrupti soluta animi. Ratione officiis voluptate dignissimos expedita vel reiciendis earum labore voluptates.
`,
      link: ''
    },
    {
      title: 'Card Two',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eum ab maxime dicta dolore adipisci corporis quibusdam corrupti soluta animi. Ratione officiis voluptate dignissimos expedita vel reiciendis earum labore voluptates.
`,
      link: ''
    },
    {
      title: 'Card Three',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eum ab maxime dicta dolore adipisci corporis quibusdam corrupti soluta animi. Ratione officiis voluptate dignissimos expedita vel reiciendis earum labore voluptates.
`,
      link: ''
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  exampleContext = {
    $implicit: 'ngTemplateOutlet are used as a container to templates that can be reused at multiple places.',
    aContextPropertys: 'Another use case where it is used to inject a template dynamically into a page.',
  };


}
