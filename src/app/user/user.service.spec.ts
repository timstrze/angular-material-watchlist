// import { TestBed, inject } from '@angular/core/testing';
//
// import { UserService } from './user.service';
// import {HttpClient, HttpClientModule} from '@angular/common/http';
//
// describe('UserService', () => {
//   const getSpy = jasmine.createSpy('getSpy');
//   const putSpy = jasmine.createSpy('putSpy');
//   const postSpy = jasmine.createSpy('postSpy');
//   const deleteSpy = jasmine.createSpy('deleteSpy');
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [UserService, {
//         provide: HttpClient,
//         useValue: {
//           get: getSpy.and.returnValue({
//             toPromise: function () {
//               return {
//                 then: function () {
//                   return {
//                     catch: function () {
//                     }
//                   };
//                 }
//               };
//             }
//           }),
//           post: postSpy.and.returnValue({
//             toPromise: function () {
//               return {
//                 then: function () {
//                   return {
//                     catch: function () {
//                     }
//                   };
//                 }
//               };
//             }
//           }),
//           put: putSpy.and.returnValue({
//             toPromise: function () {
//               return {
//                 then: function () {
//                   return {
//                     catch: function () {
//                     }
//                   };
//                 }
//               };
//             }
//           }),
//           delete: deleteSpy.and.returnValue({
//             toPromise: function () {
//               return {
//                 then: function () {
//                   return {
//                     catch: function () {
//                     }
//                   };
//                 }
//               };
//             }
//           })
//         }
//       }],
//       imports: [HttpClientModule]
//     });
//   });
//
//   it('should be created', inject([UserService], (service: UserService) => {
//     expect(service).toBeTruthy();
//   }));
// });
