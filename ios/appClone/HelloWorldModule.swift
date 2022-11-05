//
//  HelloWorldModule.swift
//  appClone
//
//  Created by TuPT on 23/09/2022.
//

import Foundation
import UIKit
import AVFoundation

@objc(HelloWorldModule)
class HelloWorldModule: NSObject {
  
  @objc func getName(callback: RCTResponseSenderBlock) {
    callback(["SWIFT native Module"])
  }
  
  @objc public func simpleMethodWithParams(
    param: String,
     callback: RCTResponseSenderBlock
   ) {
     callback(["CustomMethods.simpleMethodWithParams('\(param)')"])
   }
}
