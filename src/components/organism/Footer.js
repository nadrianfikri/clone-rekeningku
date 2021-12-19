import { faFacebookSquare, faInstagram, faTwitter, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import WarningQoutes from '../atoms/WarningQoutes';
import { Row } from '../atoms/Direction';
import { CorporateIdentity, Information, Legality } from '../molecules/FooterContent';

function Footer() {
  const footerDesc = [
    ['Layanan Kami', ['Transaksi Aset Digital', 'Withdrawal Rupiah', 'Biaya Transaksi', 'Two-Factor Authentication']],
    ['Informasi', ['Partner Afiliasi', 'Registrasi & Verifikasi', 'Syarat & Ketentuan', 'Dokumentasi API', 'CoinMarketCap', 'Blog']],
    ['Perusahaan', ['Tentang Kami', 'Karir', 'Pusat Bantuan']],
  ];
  const image = [
    {
      name: 'Bappeti',
      link: 'https://www.rekeningku.com/assets/2OICzpXdsm/img/c092f20cabfb1a32cf4f6869b72b65a8.svg',
    },
    {
      name: 'Kominfo',
      link: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1MiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0yNi4yNjAzIDM3Ljg4MTdDMjYuMjYwMyAzNy44ODE3IDI3LjA1MDYgMzguNjE0NiAyNi45MDQ0IDM5LjAyNzhDMjYuNTY5MSAzOS45NzgyIDI1LjA2ODEgNDAuNDE5OCAyNC4wOTMyIDQwLjE1N0MyMi41MzcyIDM5LjczNzUgMjEuMTE0MyAzNy45NTQxIDIxLjEyODIgMzYuMzQ2M0MyMS4xNDg3IDMzLjk4NjUgMjMuNTY3OCAzMi4wNzY2IDI1LjU3NTcgMzAuODI5M0MyNy42NDI3IDI5LjU0NTQgMzAuMjY4OSAyOS4xOTY1IDMyLjcwMzIgMjkuMjM2NkMzNS4zNTM2IDI5LjI4MDcgMzguMTgyIDI5Ljc4MDggNDAuNDAxIDMxLjIyNzNDNDEuNjM1OCAzMi4wMzI1IDQyLjY1NTQgMzMuMzA2MSA0My4xMzc4IDM0LjY5NjZDNDMuNDExMyAzNS40ODUgNDMuMTM3OCAzNy4xOTkzIDQzLjEzNzggMzcuMTk5M0M0My4xMzc4IDM3LjE5OTMgNDUuMzE1NCAzNC4yMDAzIDQ2LjEwMjggMzIuNTM1MkM0Ny4wNDExIDMwLjU1MDUgNDguNDE5MSAyOC40NTY5IDQ4LjE1NTQgMjYuMjc4NEM0OC4wMzQ4IDI1LjI4MDkgNDcuMzczNSAyNC4zMTIzIDQ2LjU1ODcgMjMuNzE4N0M0My45NDU3IDIxLjgyMjYgNDAuMzgwNSAyMS40OTM3IDM3LjE1MDkgMjEuMzg2N0MzMy44MTIzIDIxLjI3NjQgMzAuNDE3NCAyMS45ODYxIDI3LjI4NjggMjMuMTQ5OUMyNS4xNTQyIDIzLjk0MTEgMjMuMDY2MyAyNS4wNTk2IDIxLjQxMzggMjYuNjE5M0MxOS41NTI3IDI4LjM3NTggMTcuNzY5MSAzMC41MTMgMTcuMTM3NSAzMi45ODk4QzE2LjcyNzkgMzQuNTk1MSAxNi44MTU0IDM2LjQ3NTIgMTcuNTkzNiAzNy45Mzg1QzE4LjI5NjQgMzkuMjU5NyAxOS42ODA4IDQwLjIyNDkgMjEuMDcxNSA0MC43ODI2QzIyLjQzMzYgNDEuMzI4OCAyNC4wNjUyIDQxLjU3MzggMjUuNDYyMSA0MS4xMjM3QzI2LjM4NjIgNDAuODI2NSAyNy42NTUzIDQwLjIxNTEgMjcuNjg1OCAzOS4yNDY0QzI3LjczMDggMzcuODIwNiAyNi4yNjA1IDM3Ljg4MTIgMjYuMjYwNSAzNy44ODEyTDI2LjI2MDMgMzcuODgxN1oiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNMjUuNDg1MyAzOC43MjFDMjUuNDg1MyAzOC43MjEgMjUuMjc5MSAzOC4wODY5IDI1LjQ1NTMgMzcuODU5NEMyNS43NDEzIDM3LjQ5MDkgMjYuMzg1NCAzNy4zOTA5IDI2LjgyNTMgMzcuNTU0NEMyNy40NjA0IDM3Ljc5NDIgMjguMDI4NyAzOC41MTM0IDI4LjAzIDM5LjE4OTZDMjguMDMxNCA0MC4wNTggMjcuMjY2NiA0MC45MDA3IDI2LjQ5MDUgNDEuMjk0MkMyNC43OTYgNDIuMTUzMyAyMi41ODY3IDQxLjkwODcgMjAuNzg4NiA0MS4yOTQyQzE5LjI2MzYgNDAuNzczMiAxNy43Njk4IDM5LjczMTQgMTYuOTY4NSAzOC4zMzY1QzE1LjgwNTIgMzYuMzEyOSAxNS41MzM2IDMzLjY3MDcgMTYuMDU2MSAzMS4zOTcyQzE2LjU4OTcgMjkuMDc1NCAxOC4zMjMgMjcuMTMwNCAxOS45OTA2IDI1LjQyNDhDMjEuNzgzMiAyMy41OTExIDIzLjk1MjQgMjIuMDM2OSAyNi4zMTk5IDIxLjA0NUMyOS4wMzE4IDE5LjkwOTMgMzIuMDUzNSAxOS42MDU3IDM0Ljk4NyAxOS4zOTU1QzM3LjUxMDYgMTkuMjE0NyA0MC4wODQ5IDE5LjI2NjkgNDIuNTcwOCAxOS43MzY2QzQ0LjEzIDIwLjAzMTUgNDUuNzA3NCAyMC40Njk4IDQ3LjA3NSAyMS4yNzIzQzQ3LjYxMjkgMjEuNTg4MSA0OC40NjUgMjIuNTIzOCA0OC40NjUgMjIuNTIzOEM0OC40NjUgMjIuNTIzOCA0OC4wOTEgMTcuNzM1OCA0Ny4zNjAzIDE1LjQ3MDhDNDYuNzI3NSAxMy41MDk1IDQ2LjA1NTcgMTEuMzgxMSA0NC41NjY0IDkuOTUzODNDNDMuNTEyIDguOTQyOTUgNDIuMDA1IDguNDQyODIgNDAuNTc1MSA4LjEzNzZDMzcuODU5MSA3LjU1ODMzIDM0Ljk4MTIgNy42OTc2NCAzMi4yNTA1IDguMTkwMzVDMjkuMDYwNSA4Ljc2NTc2IDI1Ljk3OCAxMC4wMDU0IDIzLjEyIDExLjUzMTlDMjAuNDQ0OSAxMi45NjA5IDE3LjkyNTMgMTQuNzYwNCAxNS43NzE1IDE2Ljg5MzFDMTQuMDA3MyAxOC42NDAyIDEyLjM0MzYgMjAuNjAzNiAxMS4zMjQgMjIuODY1NUMxMC4yOTY3IDI1LjE0NDQgOS43Njc2OCAyNy43MDQgOS43ODQ1NyAzMC4yMDI4QzkuNzk4MDUgMzIuMjAzNiAxMC4yMTI5IDM0LjI2NDkgMTEuMDk1OSAzNi4wNjE0QzExLjkyMiAzNy43NDIxIDEzLjI0NTkgMzkuMTg3MiAxNC42ODgyIDQwLjM4NDNDMTUuOTQzMyA0MS40MjU4IDE3LjQyIDQyLjIzODYgMTguOTY0NiA0Mi43NjYyQzIwLjQxOTcgNDMuMjYyOSAyMS45OTA2IDQzLjU0MyAyMy41MjY1IDQzLjQ1NTZDMjUuMzIzMSA0My4zNTM4IDI3LjM2NzggNDMuMjEzNSAyOC43Mzc4IDQyLjA1QzI5LjUzODIgNDEuMzcgMzAuMTE2NyA0MC4yMjc4IDMwLjAzNTIgMzkuMTgyM0MyOS45NzggMzguNDQ5OSAyOS40NTE4IDM3LjcyNDYgMjguODI1OCAzNy4zMzc3QzI4LjE0MiAzNi45MTQ3IDI3LjIwNTggMzYuNjU0MyAyNi40Mjg1IDM2Ljg2MjVDMjUuNzA3NCAzNy4wNTUyIDI1LjEwMjcgMzcuNDQxIDI1LjAxMTYgMzguMDQyMUMyNC45Njg0IDM4LjMyNzQgMjUuNDg4NSAzOC43MjEzIDI1LjQ4ODUgMzguNzIxM0wyNS40ODUzIDM4LjcyMVoiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNMjUuNzI1NiAzOS4yMjkyQzI1LjcyNTYgMzkuMjI5MiAyNC42MiAzOS4wMDYyIDI0LjMzMiAzOC41OTM4QzIzLjkxODcgMzcuOTk3NSAyMy45NDc1IDM3LjE1NjcgMjQuMzUzMiAzNi41NTU4QzI1LjAyMTUgMzUuNTY2NSAyNi40NTIyIDM1LjE4NzUgMjcuNjQ3IDM1LjE0MTJDMjkuNjY3MiAzNS4wNTg1IDMyLjEzNTYgMzUuNDk2MSAzMy4zOTUxIDM3LjA3MzdDMzQuNDQ2MSAzOC4zOTA4IDM0LjY1ODYgNDAuNTk3NSAzMy44OTU1IDQyLjA5OTJDMzMuMTI5NyA0My42MDYxIDMxLjE0MjUgNDQuMTkxNCAyOS41MjAxIDQ0LjY3NjFDMjYuOTgwNiA0NS40MzUgMjQuMTk0OCA0NS40NzQ1IDIxLjU3NiA0NS4wNjI2QzE4Ljg3MDYgNDQuNjM3MSAxNi4yMjgxIDQzLjU4NzQgMTMuODkwNSA0Mi4xNjE1QzExLjMxNDggNDAuNTkyNSA4Ljk1Mjg2IDM4LjUzNzUgNy4xNzM4IDM2LjEwNTVDNS4yNjU0MSAzMy40OTY5IDMuODQwNTkgMzAuNDM4NyAzLjE2OTUzIDI3LjI4MjNDMi41NjI2NCAyNC40MjUgMi42NDcyNSAyMS4zODQxIDMuMjM0NDIgMTguNTIwNkMzLjkwNTY3IDE1LjI3NTIgNS4xOTk1MSAxMi4xOSA3LjA0NDc0IDkuNDM0NTVDOC40NTI0OCA3LjM0MTM5IDEwLjM0NTggNS41NTAzNyAxMi40MDUxIDQuMDg3MzNDMTQuMjU2NyAyLjc3MzQzIDE2LjM4NzcgMS44NDc5NCAxOC41NDA1IDEuMTIzODVDMjAuMjg4NiAwLjUzNTcxNyAyMi4xMjMgMC4xMjU3MjEgMjMuOTY1MyAwLjAyODYxNzRDMjYuMjU0MSAtMC4wOTE5ODM4IDI4LjU3MzYgMC4xNzcyNzEgMzAuODExIDAuNjcyODYxQzMyLjY4NTggMS4wODgxNCAzNC41MzY1IDEuNzA5ODQgMzYuMjM1NyAyLjYwNTM1QzM4LjIzNzkgMy42NjE5OSA0MS43MjU1IDYuNTk5ODEgNDEuNzI1NSA2LjU5OTgxQzQxLjcyNTUgNi41OTk4MSAzNC42NTM3IDUuOTI1NiAzMS4xOTggNi41MzUwOEMyNy4xMjY0IDcuMjUzNjQgMjMuMTA2NSA4LjcwOTI1IDE5LjU3MzQgMTAuODUxNUMxNi45NDI0IDEyLjQ0NjcgMTQuNjIyIDE0LjYxNTggMTIuNzI3NiAxNy4wMzYyQzExLjIxMDMgMTguOTc0NyAxMC4wMDMgMjEuMjA0MyA5LjI0MjQ5IDIzLjU0MzRDOC40NjkwNiAyNS45MTcxIDguMDYwNDYgMjguNDYzMyA4LjIwODk5IDMwLjk1MjFDOC4zMDk5NCAzMi42MzY2IDguNzUyMjMgMzQuMzM0NiA5LjUwMDYxIDM1Ljg0OEMxMC4yNDcyIDM3LjM1ODUgMTEuMzMyOSAzOC43MzA3IDEyLjYwMDcgMzkuODQyNUMxNC4yNDgxIDQxLjI4MyAxNi4xNTQ4IDQyLjM5OCAxOC4yMTk0IDQzLjEyODJDMTkuODgyMiA0My43MTIzIDIxLjY4NzcgNDMuOTIzMyAyMy40NTA3IDQzLjkwMTJDMjQuOTU4MiA0My44ODIxIDI2LjU2NDcgNDMuODEzIDI3LjkwNjggNDMuMTI4MkMyOS4wMzE3IDQyLjU1NDMgMzAuMjM0OSA0MS42ODk3IDMwLjYxOTIgNDAuNDg2N0MzMC45MzIxIDM5LjUwOTcgMzAuNzQyNSAzOC4yMzQ3IDMwLjA2OTggMzcuNDU4NUMyOS40MDYgMzYuNjkyNyAyOC4xOTg0IDM2LjQ5MjMgMjcuMTgzNyAzNi40OTIzQzI2LjQzODUgMzYuNDkyIDI1LjYwNCAzNi42ODgyIDI1LjA2NDkgMzcuMjAxQzI0Ljc2NCAzNy40ODczIDI0LjYwOSAzNy44NTQ4IDI0LjcxODggMzguMjU0OEMyNC44NDM4IDM4LjcwODQgMjUuNzI2OSAzOS4yMzA3IDI1LjcyNjkgMzkuMjMwN0wyNS43Mjc2IDM5LjIyOTlMMjUuNzI1NiAzOS4yMjkyWk01LjQ4MDI4IDQ4LjI2MzVMMi45NDY5NiA1MC42OTA0TDEuOTk4MjkgNTEuNjQ3N0MyLjg5ODQ5IDUyLjY3MiAzLjgwMjQ2IDUzLjY5MjYgNC43MTAxOSA1NC43MDk1TDUuNjEzOTIgNTUuODIyOFY1NS44NzgzTDUuMDAwMDUgNTUuODQ0OEw0LjM3NTEzIDU1Ljg3ODNDNC4yNTYwOCA1NS43MDc2IDQuMTI5NSA1NS41MzY5IDMuOTk1MzggNTUuMzY2MkMzLjg2NzE5IDU1LjE4ODEgMy43MzcgNTUuMDIwMyAzLjYwNDgxIDU0Ljg2MjdMMS4xNzE5NiA1Mi4wMjM5QzEuMTM0NzggNTEuOTk0MyAxLjA4NjM5IDUxLjk3NTggMS4wMjY3OSA1MS45NjgzQzAuOTk2OTc4IDUxLjk3NTMgMC45ODIwNzcgNTEuOTgyOCAwLjk4MjA3NyA1MS45OTA1VjU1Ljg3NTdMMC40OTEwNCA1NS44NDIyTDAgNTUuODc1N1Y0OC4yNjA4TDAuNDkxMDQgNDguMjk0NEwwLjk4MjA3NyA0OC4yNjA4VjUxLjcwMDhDMC45ODk0NTMgNTEuNzMwMyAxLjAyMjk0IDUxLjczNzggMS4wODI1NCA1MS43MjNDMS4xNDk1MiA1MS43MDgyIDEuMjEzNjIgNTEuNjc4NCAxLjI3NDgzIDUxLjYzMzhDMS4zMzQxMSA1MS41ODE4IDEuNDU2ODYgNTEuNDY2OCAxLjY0MzA1IDUxLjI4ODVDMS43MTAwMyA1MS4yMjE4IDEuNzgwNjkgNTEuMTU0OSAxLjg1NTA0IDUxLjA4ODFMNC42MDEwNyA0OC4yNjEzTDUuMDQ3NCA0OC4yOTQ5TDUuNDgwMjggNDguMjYzNVoiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNMTMuNTM2NCA1MS45NzkxQzEzLjUzNjQgNTEuNDc0NSAxMy40ODggNTEuMDI5MiAxMy4zOTEyIDUwLjY0MzFDMTMuMjk0NCA1MC4yNDk5IDEzLjEwODQgNDkuODc4OCAxMi44MzMxIDQ5LjUzQzEyLjU1NzkgNDkuMTgxMiAxMi4yMTU2IDQ4LjkxNCAxMS44MDYzIDQ4LjcyODRDMTEuNDA0NiA0OC41NDMgMTAuOTczMSA0OC40NTAzIDEwLjUxMTggNDguNDUwM0M5LjUzNzEyIDQ4LjQ1MDMgOC43NjcxMiA0OC43OTE3IDguMjAyIDQ5LjQ3NDZDNy42NDQwNiA1MC4xNDk5IDcuMzY1MDkgNTEuMDU1NCA3LjM2NTA5IDUyLjE5MTFDNy4zNjUwOSA1My4yODIgNy42NjI3MyA1NC4xMzkyIDguMjU4IDU0Ljc2MjhDOC44MTU5NCA1NS4zNDE3IDkuNTMzNzkgNTUuNjMxMiAxMC40MTE2IDU1LjYzMTJDMTEuNDYwNiA1NS42MzEyIDEyLjI3NTIgNTUuMTc4NCAxMi44NTU0IDU0LjI3M0MxMy4zMDkyIDUzLjU2OCAxMy41MzYxIDUyLjgwMzYgMTMuNTM2MSA1MS45Nzk2TDEzLjUzNjQgNTEuOTc5MVpNMTAuMzc4MiA1NS45OTc2QzkuMTM1NjcgNTUuOTk3NiA4LjEzODc5IDU1LjY0MTQgNy4zODc0NSA1NC45MjlDNi42NDM0NyA1NC4yMDkgNi4yNzE0OCA1My4yNTE1IDYuMjcxNDggNTIuMDU2NUM2LjI3MTQ4IDUwLjg2MTcgNi42Njk1MSA0OS44OTMxIDcuNDY1NTYgNDkuMTUwN0M4LjIzMTgxIDQ4LjQzODIgOS4yMTAyMiA0OC4wODIgMTAuNDAwNyA0OC4wODJDMTEuNTYxMyA0OC4wODIgMTIuNTI4NSA0OC4zODI1IDEzLjMwMjMgNDguOTgzNUMxNC4xODc1IDQ5LjY3MzcgMTQuNjMwMiA1MC42NDI0IDE0LjYzMDIgNTEuODg5NUMxNC42MzAyIDUzLjEyMTUgMTQuMjM1OSA1NC4xMTYgMTMuNDQ3MiA1NC44NzI4QzEyLjY1ODYgNTUuNjI0MSAxMS42MzU0IDU1Ljk5OTcgMTAuMzc3OSA1NS45OTk3TDEwLjM3ODIgNTUuOTk3NloiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNMjMuMzI0MyA0OC4yNjM2SDIzLjU1ODdDMjMuNzE0OSA0OS43NDA1IDIzLjgxMTYgNTAuNjQ2MSAyMy44NDg4IDUwLjk4MDFDMjMuOTY3OSA1Mi4wNzEgMjQuMDY0NSA1Mi45MjA4IDI0LjEzODkgNTMuNTI5NUMyNC4yMTkgNTQuMTMwNiAyNC4zMjcgNTQuOTEzNSAyNC40NjI3IDU1Ljg3ODVMMjMuOTM4MiA1NS44NDQ5TDIzLjQxMzcgNTUuODc4NUMyMy4zNDY4IDU1LjEzNjQgMjMuMjgyNiA1NC40Mjc0IDIzLjIyMTUgNTMuNzUxOEMyMy4xNjkzIDUzLjA3NjUgMjMuMTA1MyA1Mi40MDg1IDIzLjAyOTIgNTEuNzQ3OUMyMi45NjIyIDUxLjA4NzMgMjIuODk4MSA1MC41NDkzIDIyLjgzNjkgNTAuMTMzNUMyMi4zODMxIDUwLjk0OTggMjEuOTg4OCA1MS42NjIzIDIxLjY1MzggNTIuMjcxQzIxLjI2NzEgNTIuOTgzNCAyMC45NDM0IDUzLjU5OTQgMjAuNjgyOSA1NC4xMTkxQzIwLjQwMDIgNTQuNjkwNiAyMC4xNDM1IDU1LjIzNiAxOS45MTI4IDU1Ljc1NTVIMTkuNzkyNkwxOS4xNzg3IDU0LjQ5NzRDMTguOTEwOCA1My45NDA5IDE4LjY3MjcgNTMuNDYxNCAxOC40NjQ0IDUzLjA1ODlDMTguMjU2MSA1Mi42NTA2IDE3Ljk5OTQgNTIuMTU3MSAxNy42OTQzIDUxLjU3ODNDMTcuNDMzOSA1MS4wOTU5IDE3LjE3NzIgNTAuNjEzNSAxNi45MjQyIDUwLjEzMTFDMTYuNzk2IDUxLjE5MjUgMTYuNjczMyA1Mi4yNjQ4IDE2LjU1NiA1My4zNDgyQzE2LjQzNjkgNTQuNDMyIDE2LjM3NzQgNTUuMjc0NCAxNi4zNzc0IDU1Ljg3NTRMMTUuOTg2OCA1NS44NDE4TDE1LjU4NSA1NS44NzU0QzE1Ljc0MTIgNTQuOTEwNSAxNS45NDU4IDUzLjU0MTIgMTYuMTk4OSA1MS43Njc1QzE2LjQ1MiA0OS45ODYyIDE2LjYwNDUgNDguODE3MyAxNi42NTY1IDQ4LjI2MDdIMTYuOTQ0OUMxNy4zMzE3IDQ5LjAxNzcgMTcuNjQ3OSA0OS42Mzc1IDE3Ljg5MzUgNTAuMTE5OEMxOC4xOTExIDUwLjY5MTMgMTguNTQzNyA1MS4zNDgxIDE4Ljk1MTEgNTIuMDkwMkMxOS4zOTc1IDUyLjg5OSAxOS43ODA3IDUzLjU2NyAyMC4xMDA1IDU0LjA5NDJDMjEuMTcxOCA1Mi4xNDk3IDIyLjI0MzEgNTAuMjA1MiAyMy4zMTQ1IDQ4LjI2MDdMMjMuMzI0MyA0OC4yNjM2Wk0yNi4wODIxIDU1Ljg4MjZWNDguMjY3N0wyNi41NzMyIDQ4LjMwMTNMMjcuMDY0MiA0OC4yNjc3VjU1Ljg4MjZMMjYuNTczMiA1NS44NDlMMjYuMDgyMSA1NS44ODI2Wk0zNS43MTE2IDQ4LjI2MzZWNTUuODc4NUgzNS4zNzY4TDM0Ljc5NjYgNTUuMTk5NUwyOS45NzU2IDQ5Ljg3ODJIMjkuODY0MVY1NS44Nzg3TDI5LjU1MTYgNTUuODQ1MUwyOS4yMzkyIDU1Ljg3ODdWNDguMjYzOEgyOS42NzE4TDM0Ljk3MjggNTMuOTk3SDM1LjA4NDNWNDguMjYzOEwzNS4zOTY4IDQ4LjI5NzRMMzUuNzExNiA0OC4yNjM2Wk0zNy44MDI3IDU1Ljg4MjZWNDguMjY3N0g0MS43NjQ0TDQxLjczMDggNDguNjAxNkw0MS43NjQ0IDQ4LjkzNTZDNDEuNTQxMiA0OC44OTA5IDQxLjM1ODkgNDguODYxMiA0MS4yMTc2IDQ4Ljg0NjVDNDEuMDc2MyA0OC44MjQxIDQwLjkyMzcgNDguODEyOSA0MC43NiA0OC44MTI5TDM5LjY0NCA0OC43OTA2SDM4Ljc4NDhWNTEuNTgyN0g0MC41MTQ1QzQwLjY1NTkgNTEuNTgyNyA0MC44NDIgNTEuNTc1MiA0MS4wNzI3IDUxLjU2MDNDNDEuMzEwOCA1MS41Mzc5IDQxLjQ1NSA1MS41MjY3IDQxLjUwNTMgNTEuNTI2N0w0MS40NzE2IDUxLjgxNjJMNDEuNTA1MyA1Mi4xMjc5QzQxLjM3MTMgNTIuMTI3OSA0MS4xODUzIDUyLjEyMDQgNDAuOTQ3MiA1Mi4xMDU2QzQwLjcwOSA1Mi4wODMyIDQwLjU2NDkgNTIuMDcyIDQwLjUxNDUgNTIuMDcySDM4Ljc4NDhWNTUuODc5NEwzOC4yOTM3IDU1Ljg0NTlMMzcuODAyNyA1NS44ODI2WiIgZmlsbD0id2hpdGUiLz4NCjxwYXRoIGQ9Ik01MC4xMjA0IDUxLjk3OTFDNTAuMTIwNCA1MS40NzQ1IDUwLjA3MiA1MS4wMjkyIDQ5Ljk3NTIgNTAuNjQzMUM0OS44Nzg0IDUwLjI0OTkgNDkuNjkyNCA0OS44Nzg4IDQ5LjQxNzEgNDkuNTNDNDkuMTQxOCA0OS4xODEyIDQ4Ljc5OTYgNDguOTE0IDQ4LjM5MDMgNDguNzI4NEM0Ny45ODg2IDQ4LjU0MyA0Ny41NTcxIDQ4LjQ1MDMgNDcuMDk1OCA0OC40NTAzQzQ2LjEyMSA0OC40NTAzIDQ1LjM1MTEgNDguNzkxNyA0NC43ODYgNDkuNDc0NkM0NC4yMjgxIDUwLjE0OTkgNDMuOTQ5MSA1MS4wNTU0IDQzLjk0OTEgNTIuMTkxMUM0My45NDkxIDUzLjI4MiA0NC4yNDY3IDU0LjEzOTIgNDQuODQyIDU0Ljc2MjhDNDUuNCA1NS4zNDE3IDQ2LjExNzggNTUuNjMxMiA0Ni45OTU2IDU1LjYzMTJDNDguMDQ0NiA1NS42MzEyIDQ4Ljg1OTMgNTUuMTc4NCA0OS40Mzk1IDU0LjI3M0M0OS44OTMyIDUzLjU2OCA1MC4xMjAxIDUyLjgwMzYgNTAuMTIwMSA1MS45Nzk2TDUwLjEyMDQgNTEuOTc5MVpNNDYuOTYyMiA1NS45OTc2QzQ1LjcxOTcgNTUuOTk3NiA0NC43MjI4IDU1LjY0MTQgNDMuOTcxNCA1NC45MjlDNDMuMjI3NCA1NC4yMDkgNDIuODU1NSA1My4yNTE1IDQyLjg1NTUgNTIuMDU2NUM0Mi44NTU1IDUwLjg2MTcgNDMuMjUzNSA0OS44OTMxIDQ0LjA0OTYgNDkuMTUwN0M0NC44MTU4IDQ4LjQzODIgNDUuNzk0MiA0OC4wODIgNDYuOTg0NyA0OC4wODJDNDguMTQ1MyA0OC4wODIgNDkuMTEyNSA0OC4zODI1IDQ5Ljg4NjIgNDguOTgzNUM1MC43NzE1IDQ5LjY3MzcgNTEuMjE0MiA1MC42NDI0IDUxLjIxNDIgNTEuODg5NUM1MS4yMTQyIDUzLjEyMTUgNTAuODE5OSA1NC4xMTYgNTAuMDMxMiA1NC44NzI4QzQ5LjI0MjUgNTUuNjI0MSA0OC4yMTk1IDU1Ljk5OTcgNDYuOTYxOSA1NS45OTk3TDQ2Ljk2MjIgNTUuOTk3NloiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg==',
    },
    {
      name: 'Global',
      link: 'https://www.rekeningku.com/assets/2OICzpXdsm/img/73c6c462acdab93a6bcaac4c8b3a2b2d.svg',
    },
  ];
  const sosmedLogo = [
    {
      name: 'Facebook',
      icon: faFacebookSquare,
      link: 'https://www.facebook.com/',
    },
    {
      name: 'Instagram',
      icon: faInstagram,
      link: 'https://www.instagram.com/',
    },
    {
      name: 'Twitter',
      icon: faTwitter,
      link: 'https://www.twitter.com/',
    },
    {
      name: 'Telegram',
      icon: faTelegramPlane,
      link: 'https://web.telegram.org/',
    },
  ];

  return (
    <footer className="hidden md:block  px-4 pb-4 pt-14 md:px-10 lg:px-20 space-y-8 bg-primary text-white w-full ">
      <Row className="space-x-6 justify-around ">
        <Legality dataLogo={image} />
        <Information dataInfo={footerDesc} />
        <CorporateIdentity name="Rekeningku" sosmed={sosmedLogo} copyright="2021 Rekeningku.com" />
      </Row>
      <WarningQoutes
        className="text-white italic"
        highlight="Peringatan :"
        text="Pergerakan harga uang digital sangat fluktuatif, harga dapat berubah secara signifikan dari waktu ke waktu. Pergerakan harga uang digital dipengaruhi oleh banyak faktor yang harus Anda gali informasinya. Investasi aset Anda di uang digital merupakan investasi beresiko tinggi. Anda diharapkan untuk menggunakan pertimbangan yang matang dalam membuat keputusan beli atau jual aset Anda. Rekeningku.com tidak memaksa pengguna untuk melakukan aksi jual beli. Semua keputusan jual beli aset uang digital Anda merupakan keputusan Anda sendiri dan tidak dipengaruhi oleh pihak lain."
      />
    </footer>
  );
}

export default Footer;
