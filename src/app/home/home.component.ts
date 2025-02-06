import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Package from "./package";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  myInput: string = "";
  listP2: Package [] = [];
  listP: Package [] = [
    {name:'bash', version:'4.1-3', description:'The GNU Bourne Again SHell'},
    {name:'gnupg', version:'1.4.10-4', description:'GNU privacy guard - a free PGP replacement'},
    {name:'linux-base', version:'2.6.32-31', description:'Linux image base package'},
    {name:'nano', version:'2.2.4-1', description:'small, friendly text editor inspired by Pico'},
    {name:'net-tools', version:'1.60-23', description:'The NET-3 networking toolkit'},
    {name:'adduser', version:'3.112', description:'add and remove users and groups'},
    {name:'coreutils', version:'8.5-1', description:'GNU core utilities'},
    {name:'dhcpcd', version:'1:3.2.3-5 ', description:'DHCP client for automatically configuring IPv4 networking'},
    {name:'e2fslibs', version:'1.41.12-2', description:'ext2/ext3/ext4 file system libraries'},
    {name:'firmware-linux-free', version:'2.6.32-31 ', description:'Binary firmware for various drivers in the Linux kernel'},
    {name:'hostname', version:'3.04 ', description:'utility to set/show the host name or domain name'},
    {name:'iproute', version:'20100519-3 ', description:'networking and traffic control tools'},
    {name:'manpages', version:'3.27-1', description:'Manual pages about using a GNU/Linux system'},
    {name:'openssl', version:'0.9.8o-4', description:'Secure Socket Layer (SSL) binary and related cryptographic tools'},
    {name:'rsyslog', version:'4.6.4-2', description:'enhanced multi-threaded syslogd'},
    {name:'sed', version:'4.2.1-7 ', description:'The GNU sed stream editor'},
    {name:'vim-common', version:'2:7.2.445', description:'Vi IMproved - Common files'},

];
mySearch() {
  // console.log('listP size = ' + this.listP.length);
  // console.log('you search for: ' + this.myInput);
  this.listP2 = this.listP.filter((item) => item.name.startsWith(this.myInput));
  // console.log('listP2 size = ' + this.listP2.length);
  }
}
