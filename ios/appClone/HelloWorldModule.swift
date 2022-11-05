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
  
  @objc func getName(_ callback: RCTResponseSenderBlock) {
    callback(["SWIFT native Module"])
  }
  
  @objc public func simpleMethodWithParams(
     _ param: String,
     callback: RCTResponseSenderBlock
   ) {
     callback(["CustomMethods.simpleMethodWithParams('\(param)')"])
   }
}
